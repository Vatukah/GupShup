import { useRef, useEffect, useState } from "react";
export default function Character({ data }) {
  const characterRef = useRef(null);
  const chatroomRef = useRef(null);
  const [chatroom_height, setChatroomHeight] = useState(0);
  const [chatroom_width, setChatroomWidth] = useState(0);

  const getChatroomSize = () => {
    const chatroom = chatroomRef.current;
    setChatroomHeight(chatroom.clientHeight);
    setChatroomWidth(chatroom.clientWidth);
    console.log(chatroom.clientWidth,chatroom.clientHeight);
  };
  useEffect(() => {
    chatroomRef.current = characterRef.current.parentElement;
    
    getChatroomSize();
    console.log(data)
  }, []);
  return <div className="character" ref={characterRef} style={{top:data?.y+"%",left:data?.x+"%",backgroundColor:data.cloths}}></div>
 
}
