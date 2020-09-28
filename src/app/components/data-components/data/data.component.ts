import { Component, OnInit } from '@angular/core';
import {SectionsContentService} from "../../../providers/sections-content.service";
import {BackgroundsService} from "../../../providers/backgrounds.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  sections: any;

  constructor(private _sectionContent: SectionsContentService,
              private _backgrounds: BackgroundsService) {

    this.sections = _sectionContent.getSections();
  }

  ngOnInit(): void {
    document.body.style.background = '#ffffff';
  }

}
