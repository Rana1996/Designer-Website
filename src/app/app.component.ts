import {Component, HostListener} from "@angular/core";
import {SectionsContentService} from "./providers/sections-content.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  numbers = [];
  innerHeight: any;
  sections: any;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
  }
  constructor(private _sectionContent: SectionsContentService) {
    this.sections = _sectionContent.getSections();
  }
}
