import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  dataList:any;
  constructor(private notes:NoteService) { }

  ngOnInit(): void {
    this.getAllNote()
  }
  getAllNote(){
    this.notes.getAllNote().subscribe((data:any)=>{
      console.log("data===",data.data.data);
      this.dataList=data.data.data;
    })
  }
}
