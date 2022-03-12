import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  postService(url:string,reqPayload:any={},token:boolean=false,options:any){
     return this.http.post(url,reqPayload,token && options)
  }
  loginService(url:string,reqPayload:any={},token:boolean=false,options:any){
    return this.http.post(url,reqPayload,token && options)
  }
  emailService(url:string,reqPayload:any={},token:boolean=false,options:any){
    return this.http.post(url,reqPayload,token && options)
  }
}
