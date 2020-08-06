import { Component, OnInit, Input } from '@angular/core';
import {SectionsContentService} from "../providers/sections-content.service";

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.css']
})
export class PageSectionComponent implements OnInit {
  @Input() section: { imgID: string; id: number; title: string; url: string; subTitle: string };
  order1: any;
  order2: any;

  constructor() {
  }

  ngOnInit(): void {
    let id = this.section.id;
    console.log('##################### In page section - id: ' + id);
    console.log('##################### In page section - section.imgId: ' + this.section.imgID);
    this.order2 = String(id % 2 + 1);
    this.order1 = String((id + 1) % 2 + 1);
    this.section.subTitle = this.section.subTitle.replace("\n", "<br>");
  }

}
