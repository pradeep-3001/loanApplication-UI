import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
getStatusClass(arg0: string) {
throw new Error('Method not implemented.');
}


  stats = [
    { title: 'Total Users', count: 25, link: '/users', button: 'View all users' },
    { title: 'Active Loans', count: 12, link: '/loans', button: 'View all loans' },
    { title: 'Pending Reports', count: 7, link: '/reports', button: 'View all reports' },
    { title: 'Loan Categories', count: 5, link: '/categories', button: 'Manage categories' }
  ];

  activities = [
    { message: 'New User Registration: John Doe', time: '5 mins ago' },
    { message: 'Loan Application #1234 Updated', time: '30 mins ago' },
    { message: 'New Loan Category Added: Personal Loan', time: '2 hours ago' },
    { message: 'Report Template Modified: Quarterly Review', time: '5 hours ago' },
    { message: 'User Role Changed: Jane Smith to Checker', time: '1 day ago' }
  ];

  
  quickActions = [
    { title: 'Add New User', icon: 'bi-person-plus', link: '/users/add' },
    { title: 'Create Loan Category', icon: 'bi-list-check', link: '/categories/create' },
    { title: 'New Report Template', icon: 'bi-file-earmark-text', link: '/reports/template' },
    { title: 'System Settings', icon: 'bi-gear', link: '/settings' }
  ];

  

  

}
