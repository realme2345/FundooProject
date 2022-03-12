import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl="http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp"
  Url="http://fundoonotes.incubation.bridgelabz.com/api/user/login"
  Eurl="http://fundoonotes.incubation.bridgelabz.com/api/user/reset"


  constructor(private httpService:HttpService) { }
  registration(reqdata:any){
    let header=({
      'Content-type':'application/json',
    })
    return this.httpService.postService(this.baseUrl,reqdata,false,header)
  }
  loginpage(reqdata:any){
      let header=({
        'Content-type':'application/json',
      })
    return this.httpService.loginService(this.Url,reqdata,false,header)
  }
  forgotemail(reqdata:any){
    let header=({
      'Content-type':'application/json',
    })
    return this.httpService.emailService(this.Eurl,reqdata,false,header)
  }
}
