import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ChatService } from '../../services/chat.service';
import { NgIf, NgFor, NgClass, CommonModule } from '@angular/common'; // ✅ Add these
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Import this
import { HttpClient } from '@angular/common/http';
import { SocketService } from '../../services/socket-service.service';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-chats',
  imports: [RouterModule, NgFor, NgIf, FormsModule, NgClass, CommonModule], // ✅ Add NgIf and NgForOf here
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
  lastConversations: any[] = [];
  allUsers: string[] = [];
  groupChats: any[] = [];
  userSessions: any[] = [];
  userList: any[] = [];

  @ViewChild('searchInput') searchInputRef!: ElementRef;
  @ViewChild('searchContainer') searchContainerRef!: ElementRef;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.searchContainerRef?.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.showUserSearch = false;
      this.userSearchQuery = '';
    }
  }

  constructor(
    private socketService: SocketService,
    private scheduleService: ScheduleService,
    private http: HttpClient,
    private chatService: ChatService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const user = this.authService.getUserProfile();
    this.username = user.user.username;

    if (!this.username) {
      this.router.navigate(['/login']);
      return;
    }

    this.loadConversations();

    this.socketService.onMessage((message: any) => {
      this.conversations.push(message);

      if (
        this.selectedConversation &&
        ((message.senderId === this.selectedConversation.user && message.receiverId === this.username) ||
          (message.senderId === this.username && message.receiverId === this.selectedConversation.user))
      ) {
        this.selectedConversation.conversation.push(message);
      }

      this.lastConversations = [];
      this.allUsers = this.findAllUsers();
      this.allUsers.forEach(user => {
        const last = this.getLastMessageByUser(user);
        if (last) {
          this.lastConversations.push(last);
        }
      });

      this.lastConversations.sort(
        (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
      );
    });
  }

  showUserSearch: boolean = false;
  userSearchQuery: string = '';

  toggleSearchBar() {
    this.showUserSearch = !this.showUserSearch;
    this.userSearchQuery = '';

    if (this.showUserSearch) {
      setTimeout(() => {
        this.searchInputRef?.nativeElement.focus();
      }, 0);
    }
  }


  filteredUserList(): any[] {
    const query = this.userSearchQuery.toLowerCase();
    return this.userList.filter(user =>
      user.title.toLowerCase().includes(query)
      // && !this.lastConversations.find(conv => conv.username === user.username) // Compare by username
    );
  }

  startNewConversation(user: string) {
    const existingConv = this.lastConversations.find(conv => conv.user === user);

    console.log(existingConv)
    if (existingConv) {
      this.selectConversation(existingConv);
    } else {
      this.selectedConversation = { user, conversation: [] };
    }

    this.showUserSearch = false;
    this.userSearchQuery = '';
  }

  clearChat() {
    this.allUsers = [];
    this.lastConversations = [];
  }

  loadConversations() {
    this.chatService.getUserConversations(this.username).subscribe(res => {
      this.conversations = res;

      this.allUsers = this.findAllUsers();

      this.allUsers.forEach(user => {
        this.lastConversations.push(this.getLastMessageByUser(user));
      });

      this.lastConversations.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    });

    this.scheduleService.getSchedulesByUser(this.username).subscribe(res => {
      this.userSessions = res;
    });

    this.authService.getAllUsers().subscribe(res => {
      const userss = res;

      const formattedUsers = userss.map((user: any) => ({
        ...user,
        title: `${user.username}: ${user.firstname} ${user.lastname}`
      }));
      this.userList.push(...formattedUsers);
    });

    console.log(this.userList)
  }

  findAllUsers(): string[] {
    const userSet = new Set<string>();

    this.conversations.forEach(msg => {
      if (msg.senderId !== this.username) userSet.add(msg.senderId);
      if (msg.receiverId !== this.username) userSet.add(msg.receiverId);
    });

    return Array.from(userSet);
  }

  selectConversation(conv: any) {
    this.selectedConversation = conv;

    const selectedChatConversation = [];

    this.conversations.forEach(msg => {
      if ((msg.senderId === this.username && msg.receiverId === conv.user) ||
        (msg.senderId === conv.user && msg.receiverId === this.username)) {
        selectedChatConversation.push(msg);
      }
    });

    this.selectedConversation.conversation = selectedChatConversation;
  }

  findSessionName(groupId: string): string {
    const session = this.userSessions.find(s => s.sessionId === groupId);
    return session ? session.sessionName : groupId;
  }

  getLastMessageByUser(targetUser: string) {
    let lastMessage = null;

    this.conversations.forEach((msg) => {
      if (
        ((msg.senderId === this.username && msg.receiverId === targetUser) ||
          (msg.senderId === targetUser && msg.receiverId === this.username))
      ) {
        if (!lastMessage || new Date(msg.time) > new Date(lastMessage.time)) {
          lastMessage = msg;
        }
      }
    });

    return lastMessage
      ? {
        user: targetUser,
        message: lastMessage.message,
        time: lastMessage.time,
        conversation: []
      }
      : null;
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    const messagePayload = {
      senderId: this.username,
      receiverId: this.selectedConversation.user,
      message: this.newMessage,
      type: this.selectedConversation.groupId ? 'GroupMessage' : 'UserMessage',
      time: new Date()
    };

    // console.log(messagePayload)

    this.chatService.sendMessage(messagePayload).subscribe(() => {
      this.conversations.push(messagePayload);
      this.selectedConversation?.conversation?.push(messagePayload);
      this.newMessage = '';

      this.socketService.sendMessage(messagePayload); // 🔁 emit real-time message

      // Update previews
      this.lastConversations = [];
      this.allUsers = this.findAllUsers();

      // console.log(this.allUsers);
      this.allUsers.forEach(user => {
        const last = this.getLastMessageByUser(user);
        if (last) {
          this.lastConversations.push(last);
        }
      });

      this.lastConversations = this.lastConversations
        .filter(c => !!c)  // remove nulls just in case
        .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    });
  }
}
