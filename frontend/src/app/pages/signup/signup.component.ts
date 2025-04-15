import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  userProfile = {
    objectID: '',
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  };

  confirmPassword: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSignup() {
    if (this.userProfile.password !== this.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    this.authService.register(this.userProfile).subscribe({
      next: () => {
        alert('Account created successfully');
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert(err.error?.error || 'Sign up failed');
      }
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
