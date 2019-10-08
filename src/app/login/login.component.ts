import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  //Dependency injection.
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      "username": ["", Validators.required, Validators.minLength(3)],
      "password": [""]
    })
  }

  onSubmit(){
    console.log(this.loginForm)
    //If valid== true - kald på server
    if(this.loginForm.valid){

    }
  }
}
