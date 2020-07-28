import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WhiteBtnComponent } from './white-btn/white-btn.component';
import { MainSectionComponent } from './main-section/main-section.component';
import {RouterModule, Scroll} from "@angular/router";
import {ImageService} from "./providers/image.service";
import { ImageClockComponent } from './image-block/image-block.component';
import { PageSectionComponent } from './page-section/page-section.component';
// import {SafeHtmlPipe} from "./cutom-pipe";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {VirtualScrollerModule} from "ngx-virtual-scroller";

@NgModule({
  declarations: [
    AppComponent,
    WhiteBtnComponent,
    MainSectionComponent,
    ImageClockComponent,
    PageSectionComponent,
    // SafeHtmlPipe,
  ],
    imports: [BrowserModule, RouterModule, ScrollingModule, VirtualScrollerModule],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
