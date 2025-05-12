import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';

export const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: '', component: LandingComponent }, // Standalone public layout

  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },

  {
    path: '',
    component: SidebarComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'studypal', loadComponent: () => import('./pages/studypal/studypal.component').then(m => m.StudypalComponent) },
      { path: 'schedule', loadComponent: () => import('./pages/schedule/schedule.component').then(m => m.ScheduleComponent) },
      { path: 'chats', loadComponent: () => import('./pages/chats/chats.component').then(m => m.ChatsComponent) },
      { path: 'settings', loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent) },
      { path: 'faq', loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent) },
      { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: '' }
];
