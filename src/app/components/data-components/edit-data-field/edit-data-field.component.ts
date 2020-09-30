import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-data-field',
  templateUrl: './edit-data-field.component.html',
  styleUrls: ['./edit-data-field.component.css']
})
export class EditDataFieldComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  isEditMode: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isEditMode = false;
  }

  editField() {
    this.isEditMode = true;
  }

  doneEditing() {
    this.isEditMode = false;
  }

  changeEditMode(val: boolean) {
    console.log('%%%%%%%%%%In change edit mode, val: ' + val);
    this.isEditMode = val;
  }
}
