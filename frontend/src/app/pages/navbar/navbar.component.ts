import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  user: any

  ngOnInit(): void {
    this.user = this.authService.getUserProfile();

    console.log(this.user)
    if (!this.user) {
      this.router.navigate(['/login']);
      return;
    }
  }
  
  isLoggedIn(): boolean {
    return !!this.authService.getUserProfile();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/landing']);
  }
}
