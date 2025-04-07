import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {


  users:any;
  isOpen = false; // Controls modal visibility
  showForm=false;
  user = {
    name: '',
    email: '',
    status: 'Active',
    password:'',
    role: 'Admin'
  };

  constructor(private userService:UserService){}


  ngOnInit(){

    this.getAllUsers();
  }


  getAllUsers(){
    this.userService.getAll().subscribe({
      next:(data:any)=>{
        this.users = data.users
        console.log(this.user)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  onSubmit() {
    console.log('Form Submitted:', this.user);
    this.userService.addUser(this.user).subscribe({
      next:()=>{
        this.isOpen=false;
        this.getAllUsers();
      }
    })
  }

  openUserModal() {
    
  }

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
  // users = [
  //   { avatar: 'https://via.placeholder.com/40', name: 'John Doe', email: 'john.doe@example.com', status: 'Active', role: 'Admin' },
  //   { avatar: 'https://via.placeholder.com/40', name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Active', role: 'Maker' },
  //   { avatar: 'https://via.placeholder.com/40', name: 'Robert Johnson', email: 'robert.j@example.com', status: 'Active', role: 'Checker' },
  //   { avatar: 'https://via.placeholder.com/40', name: 'Emily Wilson', email: 'emily.w@example.com', status: 'Inactive', role: 'Maker' },
  //   { avatar: 'https://via.placeholder.com/40', name: 'Michael Brown', email: 'michael.b@example.com', status: 'Active', role: 'Checker' }
  // ];
}
