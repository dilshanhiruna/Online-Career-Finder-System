import { Router, RouterModule, Routes } from '@angular/router';
import { AllJobsComponent } from './JOBS/all-jobs/all-jobs.component';
import { AppliedSuccessComponent } from './JOBS/applied-success/applied-success.component';
import { ApplyJobsComponent } from './JOBS/apply-jobs/apply-jobs.component';
import { CreateJobComponent } from './JOBS/create-job/create-job.component';
import { EditJobComponent } from './JOBS/edit-job/edit-job.component';
import { MyJobsComponent } from './JOBS/my-jobs/my-jobs.component';
import { SuccessPageComponent } from './JOBS/success-page/success-page.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { CompanyCreateComponent } from './companies/company-create/company-create.component';
import { AllCompaniesComponent } from './companies/all-companies/all-companies.component';
import { MyCompaniesComponent } from './companies/my-companies/my-companies.component';
import { AuthGuard } from './auth/auth.guard';
export const ROUTES: Routes = [
  {
    path: 'createJob',
    component: CreateJobComponent,
  },

  {
    path: 'jobs',
    component: AllJobsComponent,
  },

  {
    path: 'myjobs',
    component: MyJobsComponent,
  },

  {
    path: 'myjobs/editjobs/:id',
    component: EditJobComponent,
  },

  {
    path: 'createJob/success',
    component: SuccessPageComponent,
  },

  {
    path: 'applied/success',
    component: AppliedSuccessComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },

  {
    path: 'companyCreate',
    component: CompanyCreateComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'allCompanies',
    component: AllCompaniesComponent,
  },

  {
    path: 'myCompanies',
    component: MyCompaniesComponent,
    canActivate: [AuthGuard],
  },

  // {
  //   path: 'myCompanyOverview',
  //   component: MyCompanyOverviewComponent,
  //   canActivate: [AuthGuard],
  // },

  {
    path: 'signUp',
    component: UserComponent,
    children: [{ path: '', component: SignUpComponent }],
  },

  {
    path: 'signIn',
    component: UserComponent,
    children: [{ path: '', component: SignInComponent }],
  },
];
