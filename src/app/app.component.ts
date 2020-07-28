import {Component, HostBinding, HostListener} from "@angular/core";
import {SectionsContentService} from "./providers/sections-content.service";
import {BackgroundsService} from "./providers/backgrounds.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // @HostBinding("style.--height")
  // private _height: number;
  innerHeight: any;
  sections: any;
  private _backgroundsList: any;
  backgrounds: any;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
  }
  constructor(private sanitizer: DomSanitizer,
              private _sectionContent: SectionsContentService,
              private _backgrounds: BackgroundsService) {
    this.sections = _sectionContent.getSections();
    // this._height = this.sections.length;
    this._backgroundsList = _backgrounds.getBackgrounds();
    this.backgrounds = [];
    this._backgroundsList.forEach(background => {
      let c1 = "linear-gradient(135deg, " + background.color1;
      let c2 = "", c3 = "", c4 = "";

      if(!!background.color2){
        c2 = ", " + background.color2;
        if(!!background.color3){
          c2 = ", " + background.color3;
          if(!!background.color4){
            c2 = ", " + background.color4;
          }
        }
      }
      let result = c1 + c2 + c3 + c4 + ')';
      console.log('##################### result: ' + result);
      this.backgrounds.push(result);
    } );
    console.log('##################### backgrounds: ' + this.backgrounds);
  }

  //TODO: change virtual scroller hight to be dynamic
  // @HostBinding("attr.style")
  // public get valueAsStyle(): any {
  //   return this.sanitizer.bypassSecurityTrustStyle(`--height: ${this.sections.length}`);
  // }
  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  // }//linear-gradient(135deg, #F6FAF9, #8EF3F1, #72EAE1, #4CDDCC)
}
