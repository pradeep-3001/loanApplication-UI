import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoansService } from '../../services/loans.service';

@Component({
  selector: 'app-applay-for-loan',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './applay-for-loan.component.html',
  styleUrl: './applay-for-loan.component.css'
})
export class ApplayForLoanComponent {

  // loan-application.component.ts
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
    { field: 'admissionLetter', label: 'Admission letter from institution',value:'' },
    { field: 'academicRecords', label: 'Academic records',value:'' },
    { field: 'proofOfIdentity', label: 'Proof of identity',value:'' },
    { field: 'coSignerDetails', label: 'Co-signer details (if applicable)',value:'' },
    { field: 'costDetails', label: 'Cost of attendance details',value:'' }
  ]
};

files: { [key: string]: File } = {};

constructor(private loansService: LoansService) {}

onFileChange(event: any, field: string) {
  if (event.target.files.length > 0) {
    this.files[field] = event.target.files[0];
  }
}

submitForm() {
  const formData = new FormData();
  formData.append('interestRate', this.loan.interestRate);
  formData.append('termRange', this.loan.termRange);
  formData.append('minAmount', this.loan.minAmount);
  formData.append('maxAmount', this.loan.maxAmount);

  // Append each uploaded document
  for (const key in this.files) {
    formData.append(key, this.files[key]);
  }

  this.loansService.addLoan(this.loan).subscribe({
    next: (res: any) => {
      console.log('Loan submitted successfully', res);
      alert('Loan application submitted!');
    },
    error: (err) => {
      console.error('Error submitting loan:', err);
      alert('Something went wrong');
    }
  });
}

selectedFile: File | null = null;
  previewUrl: string | null = null;
  uploadMessage: string = '';

  

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  uploadImage(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      
      // Log FormData contents for debugging
      console.log('Uploading file:', this.selectedFile.name, this.selectedFile.size);
      
      this.loansService.addLoan(formData).subscribe({
        next: (response) => {
          console.log('Upload success:', response);
          this.uploadMessage = 'Image uploaded successfully!';
          this.selectedFile = null;
          this.previewUrl = null;
        },
        error: (error) => {
          console.error('Upload error:', error);
          this.uploadMessage = 'Error uploading image: ' + error.error?.error || error.message;
        }
      });
    }
  }
}

