import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-maker-siderbar',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './maker-siderbar.component.html',
  styleUrl: './maker-siderbar.component.css'
})
export class MakerSiderbarComponent {

  constructor(private router:Router){}
  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']); // Redirect to login page
  }
}
