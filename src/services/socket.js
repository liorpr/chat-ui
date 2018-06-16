
import io from "socket.io-client";

const CONNECT = "connect";
const DISCONNECT = "disconnect";
const SPOTIM_CHAT = "spotim/chat";

export default class SocketService {
  constructor() {
    this.socket = io("https://spotim-demo-chat-server.herokuapp.com");
    this.socket.on(CONNECT, this.onConnect);
    this.socket.on(DISCONNECT, this.onDisconnect);
  }
  
  onConnect = () => {
    console.log("connected to chat server!");
  }
  
  onDisconnect = () => {
    console.log("disconnected from chat server!");
  }
  
  subscribeToNewMessage = cb => {
    this.socket.on(SPOTIM_CHAT, cb);
  }
  
  emitNewMessage = msg => {
    this.socket.emit(SPOTIM_CHAT, msg);
  }
}