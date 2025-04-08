import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-checker-sidebar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './checker-sidebar.component.html',
  styleUrl: './checker-sidebar.component.css'
})
export class CheckerSidebarComponent {


   constructor(private router:Router){}
    logOut(){
      localStorage.clear();
      this.router.navigate(['/login']); // Redirect to login page
    }
}
