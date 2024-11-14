import {useSocket} from './socketContext/socketContext.js';
import Characater from './character.jsx'; 
  export default function Chatroom() {
    const {totalUser}=useSocket();
    console.log(totalUser)
  return (
    <div style={{display:'flex',justifyContent:'center',width:'100%',height:'100vh'}}>
      <h1>chat room</h1>
      <div className="chatroom_wrapper">
        <div className="chatroom">
        {totalUser.map((user,index)=> <Characater key={index} data={user}/>)}
        </div>
      </div>
    </div>
  );
}
