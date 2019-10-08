import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  //Dependency injection.
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      "firstName": ["",Validators.required],
      "lastName": ["",Validators.required],
      "email": ["",Validators.required, Validators.email],
      "city": ["",Validators.required],
      "locationOfEducation": ["",Validators.required],
      "dateOfBirth": ["",Validators.required],
      "licenseNumber": ["",Validators.required],

    })
  }

}
