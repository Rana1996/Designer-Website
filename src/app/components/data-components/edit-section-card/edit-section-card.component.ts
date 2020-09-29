import { Component, OnInit } from '@angular/core';
import {SectionsContentService} from "../../../providers/sections-content.service";
import {BackgroundsService} from "../../../providers/backgrounds.service";
import {MatDialog} from "@angular/material/dialog";
import {EditorDialogComponent} from "../editor-dialog/editor-dialog.component";

@Component({
  selector: 'app-edit-section-card',
  templateUrl: './edit-section-card.component.html',
  entryComponents: [EditorDialogComponent],
  styleUrls: ['./edit-section-card.component.css']
})
export class EditSectionCardComponent implements OnInit {
  panelOpenState = false;
  sections: any;

  constructor(private _sectionContent: SectionsContentService,
              private _backgrounds: BackgroundsService,
              private dialog: MatDialog) {

    this.sections = _sectionContent.getSections();
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(EditorDialogComponent, {});
  }

}

