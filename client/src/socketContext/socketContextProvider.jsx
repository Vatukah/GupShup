import { useRef, useState } from "react";
import SocketContext from "./socketContext";
import { io } from "socket.io-client";

const userName = "user" + Math.random();
export default function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [totalUser, setTotalUser] = useState([]);
  const cloth = ["red", "green", "blue", "yellow", "orange", "purple"];
  const connect = () => {
    const s = io(
      "https://a7502a80-dfac-4dd8-93a8-c674f57fa3d6-00-yiy4kqup4hgm.pike.replit.dev/",
    ); // replace with your server URL

    s.on("connect", () => {
      const posX = Math.floor(Math.random() * 100);
      const posY = Math.floor(Math.random() * 100);
      const userCloth = cloth[Math.floor(Math.random() * cloth.length)];

      // Emit user details with random position
      s.emit("userDetails", {
        userData: {
          name: "User_" + s.id, // or a unique username
          cloths: userCloth,
          x: posX,
          y: posY,
        },
      });
    });

    // Listen for updated user data from the server
    s.on("sendData", (data) => {
      setTotalUser(data.userInfo); // Make sure `userInfo` contains all connected users
    });

    setSocket(s);
  };

  const disconnect = () => {
    if (socket) {
      socket.emit("user_disconnect", { user: "User_" + socket.id });
     
      setSocket(null);
    }
  };
  return (
    <SocketContext.Provider value={{ socket, connect, totalUser, disconnect }}>
      {children}
    </SocketContext.Provider>
  );
}
