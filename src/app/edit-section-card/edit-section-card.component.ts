import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-section-card',
  templateUrl: './edit-section-card.component.html',
  styleUrls: ['./edit-section-card.component.css']
})
export class EditSectionCardComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
