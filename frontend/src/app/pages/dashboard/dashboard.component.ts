import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ScheduleService } from '../../services/schedule.service';
import { NgIf, NgFor, CommonModule } from '@angular/common'; // ✅ Add these
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf, CommonModule], // ✅ Add NgIf and NgForOf here
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  user: any;
  hostingSessionsByDay: Record<string, string[]> = {};
  joinedSessionsByDay: Record<string, string[]> = {};

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private scheduleService: ScheduleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUserProfile();
  
    if (!this.user) {
      this.router.navigate(['/login']);
      return;
    }
  
    // Ensure user is fully ready before fetching schedules
    setTimeout(() => {
      const username = this.user.user.username;
      if (username) {
        this.fetchDashboardSchedules(username);
      }
    }, 100); // ✅ slight delay to allow route transition completion
  }

  sortByDateKey = (a: any, b: any): number => {
    const dateA = new Date(a.key);
    const dateB = new Date(b.key);
    return dateA.getTime() - dateB.getTime();
  };
  

  fetchDashboardSchedules(username: string): void {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday
  
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7);
  
    this.scheduleService.getSchedulesForWeek(startOfWeek.getTime(), endOfWeek.getTime()).subscribe({
      next: (schedules) => {
        const hostingMap: Record<string, string[]> = {};
        const joinedMap: Record<string, string[]> = {};
  
        // ✅ Sort sessions by start time
        schedules.sort((a: any, b: any) => a.timeFrom - b.timeFrom);
  
        schedules.forEach((session: any) => {
          const start = new Date(session.timeFrom);
          const end = new Date(session.timeTo);
          const dateLabel = start.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
          });
          const timeLabel = `${start.toLocaleTimeString([], {
            hour: 'numeric', minute: '2-digit'
          })} – ${end.toLocaleTimeString([], {
            hour: 'numeric', minute: '2-digit'
          })}: ${session.courseId} - ${session.sessionName}`;
  
          const isOwner = session.sessionId?.includes(username);
          const isMember = session.members?.includes(username) && !session.sessionId?.includes(username);
  
          if (isOwner) {
            hostingMap[dateLabel] = hostingMap[dateLabel] || [];
            hostingMap[dateLabel].push(timeLabel);
          } else if (isMember) {
            joinedMap[dateLabel] = joinedMap[dateLabel] || [];
            joinedMap[dateLabel].push(timeLabel);
          }
        });
  
        this.hostingSessionsByDay = hostingMap;
        this.joinedSessionsByDay = joinedMap;
      },
      error: (err) => console.error('Failed to load schedule:', err)
    });
  }  
}
