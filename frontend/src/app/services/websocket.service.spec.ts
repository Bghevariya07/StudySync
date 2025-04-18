import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket = io('http://localhost:5000');

  sendMessage(data: any) {
    this.socket.emit('send_message', data);
  }

  onMessage(callback: (data: any) => void) {
    this.socket.on('receive_message', callback);
  }
}
