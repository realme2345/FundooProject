import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-dispalynote',
  templateUrl: './dispalynote.component.html',
  styleUrls: ['./dispalynote.component.scss']
})
export class DispalynoteComponent implements OnInit {
  @Input() childMessage:any;
  constructor(public Cdialog: MatDialog) { }

  ngOnInit(): void {
  }
  showDialog(note:any): void {
    const dialogRef = this.Cdialog.open(UpdateComponent, {
      width: '250px',
      data:note,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

