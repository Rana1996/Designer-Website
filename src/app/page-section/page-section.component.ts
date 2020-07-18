import { Component, OnInit, Input } from '@angular/core';
import {SectionsContentService} from "../providers/sections-content.service";

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.css']
})
export class PageSectionComponent implements OnInit {
  @Input() section: { color: string; imgID: string; id: number; title: string; url: string; subTitle: string };
  order1: any;
  order2: any;

  constructor() { }

  ngOnInit(): void {
    let id = this.section.id;
    // let block1 = document.getElementById("b1");
    // let block2 = document.getElementById("b2");
    console.log('##################### In page section - id: ' + id);
    // console.log('##################### In page section - block2: ' + block2);
    console.log('##################### In page section - section.imgId: ' + this.section.imgID);
    this.order2 = String(id % 2 + 1);
    this.order1 = String((id + 1) % 2 + 1);
  }

}
