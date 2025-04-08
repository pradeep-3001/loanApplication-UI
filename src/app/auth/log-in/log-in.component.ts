
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  imageUrl = 'assets/loginImage.jpg';

  data = {
    email: '',
    password: '',
    remember: false
  };

  errorMessage: string = '';

  constructor(private logIn: LoginService, private router: Router) {}

  signIn() {
    console.log('Login data:', this.data);

    this.logIn.post(this.data).subscribe({
      next: (data: any) => {
        if (data.status === 'success') {
          const role = data.role?.toLowerCase(); // normalize role string

          // Store common user info
          localStorage.setItem('org_id', data.org_id);
          localStorage.setItem('user_id', data.user_id);
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));

          // Role-based navigation
          switch (role) {
            case 'admin':
              this.router.navigate(['/admin']);
              break;
            case 'checker':
              this.router.navigate(['/checker']);
              break;
            case 'maker':
              this.router.navigate(['/maker']);
              break;
            default:
              this.router.navigate(['/unauthorized']);
              break;
          }
        } else {
          this.errorMessage = data.message || 'Login failed. Please try again.';
          console.warn('Login failed:', this.errorMessage);
        }
      },
      error: (err: any) => {
        this.errorMessage = 'An error occurred during login. Please try again.';
        console.error('Login error:', err);
      }
    });
  }

  continueAs(role: string) {
    console.log(`Continue as ${role}`);
    // You can implement guest or demo login here if needed
  }
}









// import { Component } from '@angular/core';
// import {FormsModule} from '@angular/forms'
// import { LoginService } from '../../services/login.service';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-log-in',
//   standalone: true,
//   imports: [FormsModule,CommonModule],
//   templateUrl: './log-in.component.html',
//   styleUrl: './log-in.component.css'
// })
// export class LogInComponent {
  
//   imageUrl = 'assets/loginImage.jpg';

//     data ={
//       email :'',
//     password : '',
//     remember : false
//     }
//   errorMessage: any;

//     constructor(private logIn:LoginService,private router:Router){}
  
//     signIn() {
//       console.log(this.data);
//       this.logIn.post(this.data).subscribe({
//         next:(data:any)=>{
//           if (data.status === 'success'&&data.role==='Admin') {
//             localStorage.setItem("org_id",data.org_id);
//             localStorage.setItem("user_id",data.user_id);
//             localStorage.setItem("token",data.token)
//             localStorage.setItem('user', JSON.stringify(data.user));
//             this.router.navigate(['/admin'])
//           }
//           else if(data.status === 'success'&&data.role==='Checker'){
//             localStorage.setItem("org_id",data.org_id);
//             localStorage.setItem("user_id",data.user_id);
//             localStorage.setItem("token",data.token)
//             localStorage.setItem('user', JSON.stringify(data.user));
//             this.router.navigate(['/checker'])
//           }
//           else if(data.status === 'success'&&data.role==='Maker'){
//             localStorage.setItem("org_id",data.org_id);
//             localStorage.setItem("user_id",data.user_id);
//             localStorage.setItem("token",data.token)
//             localStorage.setItem('user', JSON.stringify(data.user));
//             this.router.navigate(['/maker'])
//           }
//           else {
//             this.errorMessage = data.message || 'Login failed. Please try again.';
//             console.log(this.errorMessage)
//           }
         
//         },
//         error:(err:any)=>{
//           console.log("error occured while login",err)
//         }
//       })

//     }
  
//     continueAs(role: string) {
//       console.log(`Continue as ${role}`);
//       // Navigate to dashboard or role-specific screen
//     }
// }
