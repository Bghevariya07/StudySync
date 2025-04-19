import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './api';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private api = environment.apiUrl;
  // private api = 'https://studysync-d5yt.onrender.com/studysync/chat';

  constructor(private http: HttpClient) {}

  getUserConversations(username: string): Observable<any> {
    return this.http.get(`${this.api}/chat/user/${username}`);
  }

  getMessages(id: string): Observable<any> {
    return this.http.get(`${this.api}/chat/messages/${id}`);
  }

  getGroupChats(id: string): Observable<any> {
    return this.http.get(`${this.api}/chat/groups/${id}`);
  }

  sendMessage(payload: any): Observable<any> {
    return this.http.post(`${this.api}/chat/send`, payload);
  }

  createGroupChat(payload: any): Observable<any> {
    return this.http.post(`${this.api}/chat/group`, payload);
  }

  addUserToGroupChat(groupId: string, username: string): Observable<any> {
    return this.http.put(`${this.api}/chat/group/add/${groupId}`,  { username });
  }

  removeUserFromGroupChat(groupId: string, username: string): Observable<any> {
    return this.http.put(`${this.api}/chat/group/remove/${groupId}`,  { username });
  }
}
