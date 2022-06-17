import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  userEmail: string = 'lorem@lorem.com';
  userAge: number = 44;
  userInterests: {
    name: string;
    experience: number;
  }[] = [
    {
      name: 'Tenis',
      experience: 1,
    },
    {
      name: 'Futbol',
      experience: 5,
    },
    {
      name: 'Müzik',
      experience: 3,
    },
  ];
  showMore: boolean = false;

  toggleMore() {
    this.showMore = !this.showMore;
  }
}
