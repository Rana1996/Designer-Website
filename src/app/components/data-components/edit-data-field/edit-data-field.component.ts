import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-data-field',
  templateUrl: './edit-data-field.component.html',
  styleUrls: ['./edit-data-field.component.css']
})
export class EditDataFieldComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;

  constructor() { }

  ngOnInit(): void {
  }

  editField() {}

}
