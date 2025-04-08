import { Routes } from '@angular/router';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoanApplicationsComponent } from './admin/loan-applications/loan-applications.component';
import { LoanCatagoriesComponent } from './admin/loan-catagories/loan-catagories.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { ReportTemplatesComponent } from './admin/report-templates/report-templates.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { MakerSiderbarComponent } from './maker/maker-siderbar/maker-siderbar.component';
import { ApplayForLoanComponent } from './maker/applay-for-loan/applay-for-loan.component';
import { ViewTrackLoanApplicationComponent } from './maker/view-track-loan-application/view-track-loan-application.component';
import { MakerDashBoardComponent } from './maker/maker-dash-board/maker-dash-board.component';
import { ModifySubmitReportComponent } from './maker/modify-submit-report/modify-submit-report.component';
import { NotificationsComponent } from './maker/notifications/notifications.component';
import { CheckerSidebarComponent } from './checker/checker-sidebar/checker-sidebar.component';
import { CheckerDashboardComponent } from './checker/checker-dashboard/checker-dashboard.component';
import { PendingLoanApplicationsComponent } from './checker/pending-loan-applications/pending-loan-applications.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },{
        path:'login',component:LogInComponent
    },
    {
          path:'admin',component:SidebarComponent,
          canActivate:[authGuard],
          data: { role: 'admin' },
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
    },
    {
        path:'maker',component:MakerSiderbarComponent,
        children:[
            {
                path:'',component:MakerDashBoardComponent
            },
            {
                path:'apply-for-loan',component:ApplayForLoanComponent
            },
            {
                path:'view-track-loan-application',component:ViewTrackLoanApplicationComponent
            },
            {
                path:'modify-submit-report',component:ModifySubmitReportComponent
            },
            {
                path:'notifications',component:NotificationsComponent
            }
        ]
    },{
        path:'checker',component:CheckerSidebarComponent,
        children:[
            {
                path:'',component:CheckerDashboardComponent
            },
            {
                path:'pending-loan-applications',component:PendingLoanApplicationsComponent
            }
        ]
    }
];
