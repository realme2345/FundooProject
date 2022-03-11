import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-forgotemail',
  templateUrl: './forgotemail.component.html',
  styleUrls: ['./forgotemail.component.scss']
})
export class ForgotemailComponent implements OnInit {
  registerForm!: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit(){
    this.submitted=true;
    console.log("inputs",this.registerForm.value);
    if(this.registerForm.valid){
      console.log("valid",this.registerForm.value);
      let data={
        email:this.registerForm.value.email
      }
      this.user.forgotemail(data).subscribe((response:any)=>{
        console.log("msg",response);
      })
    }
    else{
      console.log("Enter valid data");
    }
  }

}
