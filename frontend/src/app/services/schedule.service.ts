import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  private readonly BASE_URL = 'http://localhost:5000/studysync';
  // private readonly BASE_URL = 'https://studysync-d5yt.onrender.com/studysync';

  private readonly SCHEDULE_API = `${this.BASE_URL}/schedule`;
  private readonly COURSE_API = `${this.BASE_URL}/courses`;

  constructor(private http: HttpClient) {}

  addSchedule(payload: any): Observable<any> {
    return this.http.post(`${this.SCHEDULE_API}/add`, payload);
  }

  getSchedulesByUser(username: string) {
    return this.http.get<any[]>(`${this.SCHEDULE_API}/user/${username}`);
  }

  deleteSchedule(id: string) {
    return this.http.delete(`${this.SCHEDULE_API}/${id}`);
  }

  updateSchedule(sessionId: string, payload: any) {
    return this.http.put(`${this.SCHEDULE_API}/update/${sessionId}`, payload);
  }
  
  signupForSession(scheduleId: string, username: string) {
    return this.http.post(`${this.SCHEDULE_API}/${scheduleId}/signup`, { username });
  }
  
  cancelSignup(scheduleId: string, username: string) {
    return this.http.post(`${this.SCHEDULE_API}/${scheduleId}/cancel`, { username });
  }

  getSchedulesForWeek(from: number, to: number) {
    return this.http.get<any[]>(`${this.SCHEDULE_API}/week?from=${from}&to=${to}`);
  }

  getAllCourses() {
    return this.http.get<any[]>(`${this.COURSE_API}/all`);  
  }
}
