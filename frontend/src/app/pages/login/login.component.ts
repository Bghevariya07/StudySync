import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (user: any) => {
        this.authService.setUserProfile(user);
        this.router.navigate(['/dashboard']);
      },
      error: err => alert(err.error?.error || 'Login failed')
    });
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent) {
    this.router.navigate(['/']);
  }

  handleOutsideClick() {
    this.router.navigate(['/']);
  }
}
