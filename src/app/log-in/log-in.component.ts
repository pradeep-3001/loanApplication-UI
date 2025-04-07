import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  
  imageUrl = 'assets/loginImage.jpg';

    data ={
      email :'',
    password : '',
    remember : false
    }
  errorMessage: any;

    constructor(private logIn:LoginService,private router:Router){}
  
    signIn() {
      console.log(this.data);
      this.logIn.post(this.data).subscribe({
        next:(data:any)=>{
          if (data.status === 'success') {
            localStorage.setItem("org_id",data.org_id);
            localStorage.setItem("user_id",data.user_id);
            localStorage.setItem('user', JSON.stringify(data.user));
            this.router.navigate(['/admin'])
          }
          else {
            this.errorMessage = data.message || 'Login failed. Please try again.';
            console.log(this.errorMessage)
          }
         
        },
        error:(err:any)=>{
          console.log("error occured while login",err)
        }
      })

    }
  
    continueAs(role: string) {
      console.log(`Continue as ${role}`);
      // Navigate to dashboard or role-specific screen
    }
}
