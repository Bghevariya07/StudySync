import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService {
  // private api = 'http://localhost:5000/studysync/chat';
  private api = 'https://studysync-d5yt.onrender.com/studysync/chat';

  constructor(private http: HttpClient) {}

  getUserConversations(username: string): Observable<any> {
    return this.http.get(`${this.api}/user/${username}`);
  }

  getMessages(id: string): Observable<any> {
    return this.http.get(`${this.api}/messages/${id}`);
  }

  sendMessage(payload: any): Observable<any> {
    return this.http.post(`${this.api}/send`, payload);
  }
}
