import { Component, OnInit } from '@angular/core';
import { DayPilot, DayPilotModule } from "@daypilot/daypilot-lite-angular";
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ScheduleService } from '../../services/schedule.service';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [DayPilotModule, NgIf, FormsModule, NgSelectModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit {
  user: any;
  events: any[] = [];
  selectedEvent: any = null;
  isUserSignedUp: boolean = false;
  isUserOwner: boolean = false;
  courses: any[] = [];
  selectedCourseId: string = '';
  isEventPast; boolean;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private scheduleService: ScheduleService
  ) { }

  config: DayPilot.CalendarConfig = {
    viewType: "Week",
    eventClickHandling: "Enabled",
    onEventClick: (args) => this.selectEvent(args),
    eventMoveHandling: "Disabled",
    eventResizeHandling: "Disabled",
    timeRangeSelectedHandling: "Disabled",
    onBeforeCellRender: (args) => {
      if (args.cell.start < DayPilot.Date.now()) {
        args.cell.properties.backColor = "#f3f4f6"; // soft gray column background
      }
    }
  };

  ngOnInit(): void {
    this.user = this.authService.getUserProfile();
    if (!this.user) {
      this.router.navigate(['/login']);
      return;
    }
    this.loadEvents();
  }

  fetchCourses() {
    this.scheduleService.getAllCourses().subscribe({
      next: (res) => {
        this.courses = res;
        if (this.courses.length > 0) {
          this.selectedCourseId = this.courses[0].courseId;
          this.loadEvents();
        }
      },
      error: (err) => console.error('Failed to load courses:', err)
    });
  }

  loadEvents() {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday
    const username = this.user.user.username;

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7); // Next Sunday

    this.fetchCourses();

    this.scheduleService.getSchedulesForWeek(startOfWeek.getTime(), endOfWeek.getTime()).subscribe({
      next: (schedules) => {
        this.events = schedules.map(schedule => {
          const isMember = schedule.members?.includes(username) && !schedule.sessionId?.includes(username);
          const isOwner = schedule.sessionId?.includes(username);
          const isPast = schedule.timeFrom < new Date();
  
          return {
            id: schedule.sessionId,
            start: new DayPilot.Date(schedule.timeFrom),
            end: new DayPilot.Date(schedule.timeTo),
            text: schedule.courseId + '\n' + schedule.sessionName,
            sessionName: schedule.sessionName,
            note: schedule.note,
            members: schedule.members || [],
            courseId: schedule.courseId,
            barColor: isPast ? "#9ca3af" : isMember ? "#4CAF50" : isOwner ? "#7C3AED" : "#2196F3",
            backColor: isPast ? "#f3f3f3" : isMember ? "#e6f4ea" : isOwner ? "#F3E8FF" : "#e8f1fd"
          };
        });
      },
      error: err => console.error('Failed to load weekly events:', err)
    });
  }

  selectEvent(args: any) {
    const e = args.e;
  
    this.selectedEvent = {
      id: e.id(),
      start: e.start(),
      end: e.end(),
      sessionName: e.data.sessionName,
      note: e.data.note,
      members: e.data.members || [],
      courseId: e.data.courseId,
    };

    const today = new Date();

    if (this.selectedEvent.start.toDate() < today) {
      this.isEventPast = true;
    } else {
      this.isEventPast = false;
    }
  
    const username = this.user.user.username;
    this.isUserSignedUp = this.selectedEvent.members.includes(username);
    this.isUserOwner = this.selectedEvent.id.includes(username);
  }
  

  signupForSession() {
    if (!this.selectedEvent || !this.user) return;

    const username = this.user.user.username;
    const sessionId = this.selectedEvent.id;

    this.scheduleService.signupForSession(sessionId, username).subscribe({
      next: () => {
        this.isUserSignedUp = true;
        this.loadEvents();
      },
      error: err => console.error('Signup failed:', err)
    });
  }

  cancelSignup() {
    if (!this.selectedEvent || !this.user) return;

    const username = this.user.user.username;
    const sessionId = this.selectedEvent.id;

    this.scheduleService.cancelSignup(sessionId, username).subscribe({
      next: () => {
        this.isUserSignedUp = false;
        this.selectedEvent = null;
        this.loadEvents();
      },
      error: err => console.error('Cancel failed:', err)
    });
  }
}
