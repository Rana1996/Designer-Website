import { Component, OnInit } from '@angular/core';
import {SectionsContentService} from "../../../providers/sections-content.service";
import {BackgroundsService} from "../../../providers/backgrounds.service";

@Component({
  selector: 'app-edit-section-card',
  templateUrl: './edit-section-card.component.html',
  styleUrls: ['./edit-section-card.component.css']
})
export class EditSectionCardComponent implements OnInit {
  panelOpenState = false;
  sections: any;

  constructor(private _sectionContent: SectionsContentService,
              private _backgrounds: BackgroundsService) {

    this.sections = _sectionContent.getSections();
  }

  ngOnInit(): void {
  }

  edit() {}


}

