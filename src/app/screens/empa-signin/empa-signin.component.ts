import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-empa-signin',
  templateUrl: './empa-signin.component.html',
  styleUrls: ['./empa-signin.component.scss']
})
export class EmpaSigninComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor() { }

  ngOnInit() {
  }

  submitLogin() {
    console.log(this.loginForm.value);
  }

}
