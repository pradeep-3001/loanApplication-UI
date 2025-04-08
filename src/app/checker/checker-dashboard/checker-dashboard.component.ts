import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checker-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checker-dashboard.component.html',
  styleUrl: './checker-dashboard.component.css'
})
export class CheckerDashboardComponent {


  applications = [
    {
      title: 'Personal Loan',
      amount: 25000,
      status: 'Pending',
      submitted: 'May 15, 2023',
      review: 'Awaiting checker review',
      documents: 3
    },
    {
      title: 'Auto Loan',
      amount: 35000,
      status: 'Approved',
      submitted: 'April 28, 2023',
      approved: 'Approved on May 5, 2023',
      documents: 5
    },
    {
      title: 'Home Loan',
      amount: 250000,
      status: 'Pending',
      submitted: 'May 10, 2023',
      review: 'Additional documents requested',
      documents: 7
    },
    {
      title: 'Business Loan',
      amount: 100000,
      status: 'Rejected',
      submitted: 'April 15, 2023',
      rejected: 'Rejected on April 22, 2023',
      documents: 6
    }
  ];

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'border-approved';
      case 'pending':
        return 'border-pending';
      case 'rejected':
        return 'border-rejected';
      default:
        return '';
    }
  }
  
}
