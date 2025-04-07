import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-loan-applications',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './loan-applications.component.html',
  styleUrl: './loan-applications.component.css'
})
export class LoanApplicationsComponent {

  loanApplications = [
    { id: '#APP-1234', initials: 'JD', name: 'John Doe', email: 'john.doe@example.com', category: 'Personal Loan', status: 'Pending', submitted: '2 days ago' },
    { id: '#APP-1233', initials: 'JS', name: 'Jane Smith', email: 'jane.smith@example.com', category: 'Auto Loan', status: 'Approved', submitted: '3 days ago' },
    { id: '#APP-1232', initials: 'RM', name: 'Robert Miller', email: 'robert.m@example.com', category: 'Home Loan', status: 'Rejected', submitted: '5 days ago' },
    { id: '#APP-1231', initials: 'EJ', name: 'Emma Johnson', email: 'emma.j@example.com', category: 'Business Loan', status: 'In Review', submitted: '1 week ago' }
  ];
}
