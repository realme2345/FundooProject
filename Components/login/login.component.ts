import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      serrvice:['advance']
    });
  }
  onSubmit(){
    this.submitted=true;
    console.log("inputs",this.registerForm.value);
    if(this.registerForm.valid){
      console.log("valid",this.registerForm.value);
      let data={
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
        service:this.registerForm.value.service
      }
      this.user.registration(data).subscribe((response:any)=>{
        console.log("msg",response);
      })
    }
    else{
      console.log("Enter valid data");
    }
  }

}


