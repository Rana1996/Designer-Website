import {Component, HostListener, OnInit} from "@angular/core";
import {SectionsContentService} from "./providers/sections-content.service";
import {BackgroundsService} from "./providers/backgrounds.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }
}
