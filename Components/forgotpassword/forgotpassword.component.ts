import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  registerForm!: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }
  onSubmit(){
    this.submitted=true;
    console.log("inputs",this.registerForm.value);
    if(this.registerForm.valid){
      console.log("valid",this.registerForm.value);
    }
    else{
      console.log("Enter valid data");
    }
  }

}

