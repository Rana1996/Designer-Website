import { Component, OnInit, Input } from '@angular/core';
import {SectionsContentService} from "../../../providers/sections-content.service";
import {Section} from "../../../models/section.model";

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.css']
})
export class PageSectionComponent implements OnInit {
  @Input() section: Section;
  order1: any;
  order2: any;

  constructor() {
  }

  ngOnInit(): void {
    let id = this.section.id;
    this.order2 = String(id % 2 + 1);
    this.order1 = String((id + 1) % 2 + 1);
    this.section.description = this.section.description.replace(/\n/g, "<br>");
  }

}
