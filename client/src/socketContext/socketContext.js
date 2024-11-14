import {createContext,useContext} from 'react';

const SocketContext = createContext();

const useSocket=()=> useContext(SocketContext);
export {SocketContext as default,useSocket}