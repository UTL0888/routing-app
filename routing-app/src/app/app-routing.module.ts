import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//inject route and rotermodule for 
//import all component here
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DeparmentContactComponent } from './deparment-contact/deparment-contact.component';

//you will decide all path here and releteive path and  page not found path etc
const routes: Routes = [
   {path:'',redirectTo:'/departments',pathMatch:'full'},
   {path: `departments`, component:DepartmentListComponent},
   {
     path:'departments/:id',
    component:DepartmentDetailComponent,
    children:[
      {path:'overview',component:DepartmentOverviewComponent},
      {path:'contact',component:DeparmentContactComponent}
    ]
  },
   {path:`employees`,component:EmployeeListComponent},
   {path:`**`,component:PageNotFoundComponent}

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// prepaire routingCompnent variable and imprt place of compnet in app module ts file 
export const routingCompnent = [DepartmentListComponent,EmployeeListComponent,
  PageNotFoundComponent,DepartmentDetailComponent,DepartmentOverviewComponent,DeparmentContactComponent];
