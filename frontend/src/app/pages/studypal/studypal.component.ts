import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DayPilot, DayPilotCalendarComponent, DayPilotModule } from "@daypilot/daypilot-lite-angular";
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ScheduleService } from '../../services/schedule.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-studypal',
  standalone: true,
  imports: [DayPilotModule, NgIf, FormsModule, NgFor],
  templateUrl: './studypal.component.html',
  styleUrl: './studypal.component.scss'
})
export class StudypalComponent implements OnInit {

  @ViewChild('sessionPanel') sessionPanelRef: ElementRef | undefined;
  @ViewChild('studypalCalendar') dpCalendar: DayPilotCalendarComponent;
  @ViewChild('searchBar') searchBarRef: ElementRef | undefined;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.sessionPanelRef?.nativeElement.contains(event.target);
    if (!clickedInside && this.selected && !this.isPast) {
      this.cancelSelection();
    }

    const insideSearchBar = this.searchBarRef?.nativeElement.contains(event.target);

    if (!insideSearchBar && (this.searchQuery === '' || this.selectedCourse === null || this.filteredOptions.length !== 0)) {
      this.filteredOptions = [];
      this.searchQuery = '';
      this.selectedCourse = null;
      this.loadEvents();
    } else if (!this.selectedCourse) {
      this.filteredOptions = this.courses;
      this.loadEvents();
    }
  }

  user: any;
  events: any[] = [];
  isPast: boolean;
  isEventPast; boolean;
  searchQuery: string = '';
  courses: any[] = [];
  filteredOptions: any[] = [...this.courses];
  selectedCourse: any = null;
  isOwner: boolean = false;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private scheduleService: ScheduleService,
    private chatService: ChatService
  ) { }

  config: DayPilot.CalendarConfig = {
    viewType: "Week",
    weekStarts: DayPilot.Date.today().dayOfWeek(),
    eventClickHandling: "Enabled",
    eventMoveHandling: "Disabled",
    eventResizeHandling: "Disabled",
    timeRangeSelectedHandling: "Enabled",

    onTimeRangeSelected: (args) => {
      this.selectTime(args);
      this.isOwner = true;
      if (args.start < DayPilot.Date.now()) {
        this.isPast = true;
        return;
      } else {
        this.isPast = false;
      }
    },

    onEventClick: (args) => this.openSessionForEdit(args),

    onBeforeCellRender: (args) => {
      if (args.cell.start < DayPilot.Date.today()) {
        args.cell.properties.backColor = "#f3f4f6";
      }
    }
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
    isOwner?: boolean;
    timeFrom?: Date;
    timeTo?: Date;
  } | null = null;

  openSessionForEdit(args: any) {
    this.isPast = false;

    const event = args.e;
    const dayName = new Date(event.start().toString()).toLocaleDateString(undefined, { weekday: 'long' });

    this.selected = {
      start: event.start(),
      end: event.end(),
      day: dayName,
      showForm: event.data.id.includes(this.user.user.username),
      sessionName: event.data.text,
      sessionNotes: event.data.note || '',
      sessionId: event.data.id,
      members: event.data.members || [],
      isEdit: true,
    };

    this.isOwner = event.data.id.includes(this.user.user.username);

    const today = new Date();

    if (this.selected.start.toDate() < today) {
      // this.isPast = true;
      this.isEventPast = true;
    } else {
      this.isEventPast = false;
    }
  }

  selectTime(args: { start: DayPilot.Date, end: DayPilot.Date }) {
    this.isEventPast = false;
    const selectedDate = args.start.toDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Reset time for accurate comparison

    if (selectedDate < today) {
      return;
    }

    const dayName = selectedDate.toLocaleDateString(undefined, { weekday: 'long' });

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
    if (this.dpCalendar && this.dpCalendar.control) {
      this.dpCalendar.control.clearSelection();
    }
  }

  createSessionId(courseId: string, date: Date, username: string): string {
    const startTime = date.getTime();
    const endTime = startTime + (60 * 60 * 1000);
    return `${courseId}-${username}-${startTime}-${endTime}`;
  }

  loadEvents() {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate());
    const username = this.user.user.username;

    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7);

    this.scheduleService.getSchedulesForWeek(startOfWeek.getTime(), endOfWeek.getTime()).subscribe({
      next: (schedules) => {
        const events = schedules.map(schedule => ({
          id: schedule.sessionId,
          courseId: schedule.courseId,
          start: new DayPilot.Date(schedule.timeFrom),
          end: new DayPilot.Date(schedule.timeTo),
          text: schedule.courseId + " \n" + schedule.sessionName,
          note: schedule.note || '',
          backColor: schedule.timeTo < Date.now() ? "#f3f3f3" : !schedule.sessionId.includes(username) ? "#D1EEF3" : "#e8f1fd",
          barColor: schedule.timeTo < Date.now() ? "#9ca3af" : !schedule.sessionId.includes(username) ? "#45B3C6" : "#3b82f6"
        }));
        this.events = events;

        if (this.selectedCourse) {
          this.events = this.events.filter(event =>
            String(event.courseId) === String(this.selectedCourse.courseId)
          );
        }
      },
      error: (err) => {
        console.error('Failed to load events:', err);
      }
    });
  }

  fetchCourses() {
    this.scheduleService.getAllCourses().subscribe({
      next: (res) => {
        const courseList = res;
        if (this.courses.length > 0) {
          this.selectedCourse = null;
        }

        this.courses = courseList.map(course => ({
          ...course,
          displayName: `${course.courseId}: ${course.coursename}`
        }));
      },
      error: (err) => console.error('Failed to load courses:', err)
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
        sessionName: !this.selected.sessionId ? this.selected.sessionName : this.selected.sessionName.split('\n')[1]?.trim(),
        note: this.selected.sessionNotes,
        courseId: this.selectedCourse !== null ? this.selectedCourse.courseId : this.selected.sessionId.split("-")[0],
        timeFrom: startDate.getTime(),
        timeTo: endDate.getTime()
      };

      if (this.selected.isEdit && this.selected.sessionId) {
        // Edit existing session
        this.scheduleService.updateSchedule(this.selected.sessionId, payload).subscribe({
          next: () => {
            this.selected = null;
            this.loadEvents();
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
            this.loadEvents();
          },
          error: err => console.error('Creation failed:', err)
        });

        const chatPayload = {
          groupId: sessionId,
          users: [this.user.user.username]
        };

        this.chatService.createGroupChat(chatPayload).subscribe({
          next: (res) => {
          },
          error: (err) => {
            console.error('Failed to create group chat:', err);
          }
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
            this.loadEvents();
          },
          error: err => console.error('Delete failed:', err)
        });
      }
    }
  }

  filterOptions(): void {
    if (this.searchQuery === '') {
      this.filteredOptions = this.courses;
    } else {
      const query = this.searchQuery.toLowerCase().trim();
      this.filteredOptions = this.courses.filter(option =>
        option.displayName.toLowerCase().includes(query)
      );
    }
  }

  selectOption(option: any): void {
    this.searchQuery = option.displayName;
    this.selectedCourse = option;
    this.filteredOptions = [];

    this.loadEvents();

    this.events = this.events.filter(event =>
      String(event.courseId) === String(this.selectedCourse.courseId)
    );
  }

  ngOnInit(): void {
    this.user = this.authService.getUserProfile();
    if (!this.user) {
      this.router.navigate(['/login']);
      return;
    }

    this.isPast = false;
    this.isEventPast = false;

    this.loadEvents();
    this.fetchCourses();
  }
}
