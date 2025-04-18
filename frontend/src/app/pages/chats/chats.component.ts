import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ChatService } from '../../services/chat.service';
import { NgIf, NgFor, NgClass } from '@angular/common'; // ✅ Add these
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Import this
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chats',
  imports: [RouterModule, NgFor, NgIf, FormsModule, NgClass], // ✅ Add NgIf and NgForOf here
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.scss',
  standalone: true
})
export class ChatsComponent implements OnInit {
  selectedConversation: any = null;
  conversations: any[] = [];
  messages: any[] = [];
  username: string;
  newMessage: string = '';

  constructor(
    private http: HttpClient,
    private chatService: ChatService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUserProfile();
    this.username = user.user.username;

    if (!this.username) {
      this.router.navigate(['/login']);
      return;
    }
  
    // Ensure user is fully ready before fetching schedules
    this.loadConversations();
  }

  loadConversations() {
    this.chatService.getUserConversations(this.username).subscribe(res => {
      this.conversations = res;
      console.log(this.conversations);
    });
  }

  selectConversation(conv: any) {
    this.selectedConversation = conv;
    this.chatService.getMessages(conv.groupId || conv.receiverId).subscribe(res => {
      this.messages = res;
    });
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;
    const messagePayload = {
      senderId: this.username,
      receiverId: this.selectedConversation.groupId || this.selectedConversation.receiverId,
      message: this.newMessage,
      type: this.selectedConversation.groupId ? 'GroupMessage' : 'UserMessage',
      time: new Date()
    };
    this.chatService.sendMessage(messagePayload).subscribe(() => {
      this.messages.push(messagePayload);
      this.newMessage = '';
    });
  }
}
