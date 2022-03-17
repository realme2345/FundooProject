import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-takeanotes',
  templateUrl: './takeanotes.component.html',
  styleUrls: ['./takeanotes.component.scss']
})
export class TakeanotesComponent implements OnInit {
  isShow=false
  NoteValue!:FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder,private notes:NoteService) { }

  ngOnInit(): void {
    this.NoteValue = this.formBuilder.group({
      title: ['',],
      description: ['',],
    });
  }
  show(){
    this.isShow=true;
  }
  onSubmit(){
    this.submitted=true;
    console.log("inputs",this.NoteValue.value);
    if(this.NoteValue.valid){
      console.log("valid",this.NoteValue.value);
      let data={
        title:this.NoteValue.value.title,
        description:this.NoteValue.value.description,
      }
      this.notes.takeAllNotes(data).subscribe((response:any)=>{
        console.log("msg",response);
        this.isShow=false;
        // localStorage.setItem('token',response.id)
      })
    }
    else{
      console.log("Enter valid data");
    }
  }
}
