import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  @Output() osman = new EventEmitter<User>();
  addUserForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      surname: this.formBuilder.control('', Validators.required),
      age: this.formBuilder.control(0, Validators.required),
    });
  }
  onSubmit() {
    this.osman.emit(this.addUserForm.value)
  }
}
