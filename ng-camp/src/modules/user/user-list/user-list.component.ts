import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [
    {
      name: 'Volkan',
      surname: 'Sönmez',
      age: 44,
      isOnline: false,
    },
    {
      name: 'Barış',
      surname: 'Sönmez',
      age: 9,
      isOnline: true,
    },
    {
      name: 'Kerem',
      surname: 'Sönmez',
      age: 5,
      isOnline: true,
    },
  ];

  jsonPlaceHolderUsers: User[];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().toPromise().then((users: User[]) => {
      console.log(users)
      this.jsonPlaceHolderUsers = users;
    })
  }

  getFormValue(value: User) {
    console.log(value);
    this.users.push(value);
  }
}
