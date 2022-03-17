import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  url=environment.baseUrl
  token:any;

  constructor(private httpService:HttpService) { 
    this.token=localStorage.getItem('token')
  }
  takeAllNotes(reqdata:any){
    console.log(reqdata)
    let header = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
  return this.httpService.postService(this.url+'notes/addNotes',reqdata,true,header)
}
  getAllNote(){
    let header = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.getAllNoteService(this.url+'notes/getNotesList',true,header)
  }
}
