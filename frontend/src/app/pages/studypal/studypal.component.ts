import { Component, OnInit } from '@angular/core';
import { DayPilot, DayPilotModule } from "@daypilot/daypilot-lite-angular";
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-studypal',
  standalone: true,
  imports: [DayPilotModule, NgIf, FormsModule],
  templateUrl: './studypal.component.html',
  styleUrl: './studypal.component.scss'
})
export class StudypalComponent implements OnInit {
  user: any;
  events: any[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private scheduleService: ScheduleService
  ) {}

  config: DayPilot.CalendarConfig = {
    viewType: "Week",
    onTimeRangeSelected: (args) => this.selectTime(args),
    eventMoveHandling: "Disabled",
    eventResizeHandling: "Disabled",
    eventClickHandling: "Enabled",
onEventClick: (args) => this.openSessionForEdit(args),
  };

  selected: {
    start: DayPilot.Date;
    end: DayPilot.Date;
    day: string;
    showForm: boolean;
    sessionName: string;
    sessionNotes: string;
    sessionId?: string;
    members?: string[];
    isEdit?: boolean;
    timeFrom?: Date;
    timeTo?: Date;
  } | null = null;
  
  openSessionForEdit(args: any) {
    const event = args.e;
    const dayName = new Date(event.start().toString()).toLocaleDateString(undefined, { weekday: 'long' });
  
    this.selected = {
      start: event.start(),
      end: event.end(),
      day: dayName,
      showForm: true,
      sessionName: event.data.text,
      sessionNotes: event.data.note || '',
      sessionId: event.data.id,
      members: event.data.members || [],
      isEdit: true
    };
  }  

  selectTime(args: { start: DayPilot.Date, end: DayPilot.Date }) {
    const dayName = new Date(args.start.toString()).toLocaleDateString(undefined, { weekday: 'long' });

    this.selected = {
      start: args.start,
      end: args.end,
      day: dayName,
      showForm: false,
      sessionName: '',
      sessionNotes: ''
    };
  }

  showForm() {
    if (this.selected) {
      this.selected.showForm = true;
    }
  }

  cancelSelection() {
    this.selected = null;
  }

  createSessionId(courseId: string, date: Date, username: string): string {
    const startTime = date.getTime();
    const endTime = startTime + (60 * 60 * 1000);
    return `${courseId}-${username}-${startTime}-${endTime}`;
  }

  loadEvents(username: string) {
    this.scheduleService.getSchedulesByUser(username).subscribe({
      next: (schedules) => {
        const events = schedules.map(schedule => ({
          id: schedule.sessionId,
          start: new DayPilot.Date(schedule.timeFrom),
          end: new DayPilot.Date(schedule.timeTo),
          text: schedule.sessionName,
          note: schedule.note || '',
        }));
        this.events = events;
      },
      error: (err) => {
        console.error('Failed to load events:', err);
      }
    });
  }
  
  saveSession() {
    if (this.selected) {
      const startDate = this.selected.start instanceof DayPilot.Date
        ? this.selected.start.toDate()
        : new Date(this.selected.start);
      const endDate = this.selected.end instanceof DayPilot.Date
        ? this.selected.end.toDate()
        : new Date(this.selected.end);
  
      const payload = {
        sessionName: this.selected.sessionName,
        note: this.selected.sessionNotes,
        courseId: 'CSCI4177', // Replace later if dynamic
        timeFrom: startDate.getTime(),
        timeTo: endDate.getTime()
      };
  
      if (this.selected.isEdit && this.selected.sessionId) {
        // Edit existing session
        this.scheduleService.updateSchedule(this.selected.sessionId, payload).subscribe({
          next: () => {
            this.selected = null;
            this.loadEvents(this.user.user.username);
          },
          error: err => console.error('Update failed:', err)
        });
      } else {
        // Create new session
        const sessionId = this.createSessionId(payload.courseId, startDate, this.user.user.username);
        const fullPayload = { ...payload, sessionId, members: [this.user.user.username] };
  
        this.scheduleService.addSchedule(fullPayload).subscribe({
          next: () => {
            this.selected = null;
            this.loadEvents(this.user.user.username);
          },
          error: err => console.error('Creation failed:', err)
        });
      }
    }
  }
  

  deleteSession() {
  if (this.selected && this.selected.sessionId) {
    const hasMembers = this.selected.members && this.selected.members.length > 1;
    const confirmMsg = hasMembers
      ? 'There are users registered for this session. Are you sure you want to delete it?'
      : 'Are you sure you want to delete this session?';

    if (confirm(confirmMsg)) {
      this.scheduleService.deleteSchedule(this.selected.sessionId).subscribe({
        next: () => {
          this.selected = null;
          this.loadEvents(this.user.user.username);
        },
        error: err => console.error('Delete failed:', err)
      });
    }
  }
}
  

  ngOnInit(): void {
    this.user = this.authService.getUserProfile();
    if (!this.user) {
      this.router.navigate(['/login']);
      return;
    }

    this.loadEvents(this.user.user.username);
  }
}
