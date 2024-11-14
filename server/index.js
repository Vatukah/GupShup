import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
const app = express();
const server = createServer(app);
let userInfo = [];
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const post_totalUser = () => {
  io.emit("totalUser", {
    totalUser: io.engine.clientsCount,
  });
};
io.on("connection", (socket) => {
  console.log("one user connected" + socket.id);
  socket.on("userDetails", (data) => {
    userInfo = [...userInfo, data.userData];
    io.emit("sendData", { userInfo });
    console.log(userInfo);
  });
  socket.on("user_disconnect", ( data) => {
  const filtered = userInfo.filter((user) => user.name !== data.user);
  userInfo = filtered;
  io.emit("sendData", { userInfo });
  socket.disconnect();
    
});
  socket.on('someEvent', () => {
    disconnectAllUsers();
    console.log("All users have been disconnected.");
    userInfo=[];
    io.emit("sendData", { userInfo });


  });
});

function disconnectAllUsers() {
  for (const [socketId, socket] of io.sockets.sockets) {
    socket.disconnect();
  }
}



server.listen(3000, () => {
  console.log("listening on *:3000");
});
