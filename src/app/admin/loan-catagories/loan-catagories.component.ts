import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoanCatagoriesService } from '../../services/loan-catagories.service';

@Component({
  selector: 'app-loan-catagories',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './loan-catagories.component.html',
  styleUrl: './loan-catagories.component.css'
})
export class LoanCatagoriesComponent {
[x: string]: any;

loanCategories: any = []
  //  = [
  //   {
  //     name: 'Personal Loan',
  //     status: 'Active',
  //     created: '3 months ago',
  //     loans: 12,
  //     interestRate: '8.5% - 12.5%',
  //     termRange: '6 - 60 months',
  //     minAmount: '$1,000',
  //     maxAmount: '$50,000',
  //     documents: ['Proof of identity', 'Proof of address', 'Income verification', 'Bank statements (3 months)']
  //   },
  //   {
  //     name: 'Home Loan',
  //     status: 'Active',
  //     created: '5 months ago',
  //     loans: 8,
  //     interestRate: '4.5% - 6.5%',
  //     termRange: '10 - 30 years',
  //     minAmount: '$50,000',
  //     maxAmount: '$1,000,000',
  //     documents: ['Property details and valuation', 'Proof of identity', 'Income verification (last 2 years)', 'Bank statements (6 months)', 'Tax returns']
  //   },
  //   {
  //     name: 'Auto Loan',
  //     status: 'Active',
  //     created: '2 months ago',
  //     loans: 15,
  //     interestRate: '5.5% - 9.0%',
  //     termRange: '12 - 72 months',
  //     minAmount: '$5,000',
  //     maxAmount: '$100,000',
  //     documents: ['Vehicle information', 'Proof of identity', 'Proof of income', 'Bank statements (3 months)', 'Proof of insurance']
  //   },
  //   {
  //     name: 'Business Loan',
  //     status: 'Active',
  //     created: '4 months ago',
  //     loans: 7,
  //     interestRate: '7.0% - 15.0%',
  //     termRange: '12 - 84 months',
  //     minAmount: '$25,000',
  //     maxAmount: '$500,000',
  //     documents: ['Business plan', 'Business registration documents', 'Financial statements (2-3 years)', 'Tax returns', 'Bank statements (6 months)', 'Proof of collateral (if applicable)']
  //   },
  //   {
  //     name: 'Education Loan',
  //     status: 'Active',
  //     created: '1 month ago',
  //     loans: 5,
  //     interestRate: '4.0% - 7.5%',
  //     termRange: '5 - 15 years',
  //     minAmount: '$5,000',
  //     maxAmount: '$100,000',
  //     documents: ['Admission letter from institution', 'Academic records', 'Proof of identity', 'Co-signer details (if applicable)', 'Cost of attendance details']
  //   }
  // ];

  loan = {
    name: 'Education Loan',
    status: 'Active',
    created: '1 month ago',
    loans: 5,
    interestRate: '4.0% - 7.5%',
    termRange: '5 - 15 years',
    minAmount: '$5,000',
    maxAmount: '$100,000',
    documents: [
      { value: 'Admission letter from institution' },
      { value: 'Academic records' },
      { value: 'Proof of identity' },
      { value: 'Co-signer details (if applicable)' },
      { value: 'Cost of attendance details' }
    ]
  };

  constructor(private loanCategoryService:LoanCatagoriesService){}


  ngOnInit(){
    this.getAllCategories()
  }

  
  
  
  getAllCategories() {
    this.loanCategoryService.getAll().subscribe({
      next: (data: any) => {
        
       this.loanCategories = data.loanCategory
       console.log(this.loanCategories)
       this.loanCategories.forEach((category: any) => {
        console.log(category.documents);

      });
       
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  

  saveLoan() {
    console.log('Loan saved:', this.loan);
    alert('Loan details saved successfully!');
    this.loanCategoryService.addLoan(this.loan).subscribe({
      next:(data)=>{
        this.getAllCategories()
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


  
  addDocument() {
    this.loan.documents.push({ value: '' });
  }
  
  removeDocument(index: number) {
    this.loan.documents.splice(index, 1);
  }
  
  trackByIndex(index: number, item: any): number {
    return index;
  }
  
}
