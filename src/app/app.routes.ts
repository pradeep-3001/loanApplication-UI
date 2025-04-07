import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoanApplicationsComponent } from './admin/loan-applications/loan-applications.component';
import { LoanCatagoriesComponent } from './admin/loan-catagories/loan-catagories.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { ReportTemplatesComponent } from './admin/report-templates/report-templates.component';
import { LogInComponent } from './log-in/log-in.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },{
        path:'login',component:LogInComponent
    },
    {
          path:'admin',component:SidebarComponent,
        children:[
            {
                path:'',component:AdminDashboardComponent
            },
            {
                path:'loan-applications',component:LoanApplicationsComponent
            },
            {
                path:'loan-catagories',component:LoanCatagoriesComponent
            },
            {
                path:'user-management',component:UserManagementComponent
            },
            {
                path:'report-template',component:ReportTemplatesComponent
            }
        ]
    }
];
