import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, UserDetailComponent, UserListComponent, AddUserComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UserListComponent],
})
export class UserModule {}
