import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from './api';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = environment.apiUrl;

  private currentUserSubject = new BehaviorSubject<any>(this.loadUserFromStorage());
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post(`${this.api}/login`, credentials);
  }

  getAllUsers() {
    return this.http.get<any[]>(`${this.api}/users/all`);
  }

  register(data: any) {
    return this.http.post(`${this.api}/signup`, data);
  }

  setUserProfile(profile: any) {
    this.currentUserSubject.next(profile);
    localStorage.setItem('userProfile', JSON.stringify(profile));
  }

  getUserProfile() {
    const stored = localStorage.getItem('userProfile');
  return this.currentUserSubject.value || (stored ? JSON.parse(stored) : null);
  }

  logout() {
    this.currentUserSubject.next(null);
    localStorage.removeItem('userProfile');
  }

  private loadUserFromStorage() {
    const stored = localStorage.getItem('userProfile');
    return stored ? JSON.parse(stored) : null;
  }

  
}
