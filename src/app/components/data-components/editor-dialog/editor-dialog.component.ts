import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EditSectionCardComponent} from "../edit-section-card/edit-section-card.component";

@Component({
  selector: 'app-editor-dialog',
  templateUrl: './editor-dialog.component.html',
  styleUrls: ['./editor-dialog.component.css']
})
export class EditorDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditSectionCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    console.log('What the fuck is going ooooon RRRRRR');
  }

}
export interface DialogData {
  fieldName: string;
  fieldCurrent: string;
}
