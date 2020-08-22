import {Component, HostListener, OnInit} from "@angular/core";
import {SectionsContentService} from "./providers/sections-content.service";
import {BackgroundsService} from "./providers/backgrounds.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  innerHeight: any;
  sectionCount: number;
  sections: any;
  private _backgroundsList: any;
  backgrounds: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
  }

  ngOnInit(): void {
  }

  constructor(private sanitizer: DomSanitizer,
              private _sectionContent: SectionsContentService,
              private _backgrounds: BackgroundsService) {

    window.scrollTo(0, 0);
    this.innerHeight = window.innerHeight;
    this.sectionCount = 1;
    this.sections = _sectionContent.getSections();
    this._backgroundsList = _backgrounds.getBackgrounds();
    this.backgrounds = [];
    this._backgroundsList.forEach(background =>  this.setColor(background));
  }

  setColor(background) {
    let c1 = "linear-gradient(135deg, " + background.color1;
    let c2 = "", c3 = "", c4 = "";

    if(!!background.color2){
      c2 = ", " + background.color2;
      if(!!background.color3){
        c2 = ", " + background.color3;
        if(!!background.color4){
          c2 = ", " + background.color4;
        }}}

    let result = c1 + c2 + c3 + c4 + ')';
    this.backgrounds.push(result);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const scroll = window.pageYOffset;
    let sectionHeight = this.innerHeight * 1.5;

    //Updating sectionCount
    this.sectionCount = Math.floor((scroll + this.innerHeight * 0.5) / sectionHeight );

    //Updating background
    if(this.sectionCount == 0 || this.sectionCount === (this.backgrounds.length + 1)){
      document.body.style.background = "#151414";
    } else
      document.body.style.background = this.backgrounds[this.sectionCount - 1];
  }

}
