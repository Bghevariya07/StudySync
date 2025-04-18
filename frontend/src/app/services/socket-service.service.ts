// socket-service.service.ts
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from './api';

@Injectable({ providedIn: 'root' })
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io(environment.baseUrl); // or your deployed endpoint
  }

  sendMessage(data: any) {
    this.socket.emit('send_message', data);
  }

  onMessage(callback: (data: any) => void) {
    this.socket.on('receive_message', callback);
  }
}
