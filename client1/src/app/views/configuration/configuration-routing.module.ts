import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleManagementComponent } from './component/role-management/role-management/role-management.component';
import { UserManagementComponent } from './component/user-management/user-management/user-management.component';

const routes: Routes = [
  {
    path: "UserMgmt",
    component: UserManagementComponent,
  },
  {
    path: "RoleMgmt",
    component: RoleManagementComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
