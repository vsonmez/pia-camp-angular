import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: User = {
    age: 0,
    isOnline: false,
    name: '',
    surname: '',
  };
  constructor() {}
  ngOnInit(): void {}
  /*  userName: string = 'Volkan';
  userSurname: string = 'Sönmez'; */
}
