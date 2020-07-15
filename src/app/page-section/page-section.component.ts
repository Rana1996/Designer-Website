import { Component, OnInit, Input } from '@angular/core';
import {SectionsContentService} from "../providers/sections-content.service";

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.css']
})
export class PageSectionComponent implements OnInit {
  @Input() id: number;
  private content: { color: string; imgID: string; id: number; title: string; url: string; subTitle: string };

  constructor(private _sectionContent: SectionsContentService) { }

  ngOnInit(): void {
    this.content = this._sectionContent.getSection(this.id);
  }

}
