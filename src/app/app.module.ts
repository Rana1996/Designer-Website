import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WhiteBtnComponent } from './white-btn/white-btn.component';
import { MainSectionComponent } from './main-section/main-section.component';
import {RouterModule} from "@angular/router";
import {ImageService} from "./providers/image.service";
import { ImageClockComponent } from './image-block/image-block.component';
import { PageSectionComponent } from './page-section/page-section.component';
import {SafeHtmlPipe} from "./cutom-pipe";

@NgModule({
  declarations: [
    AppComponent,
    WhiteBtnComponent,
    MainSectionComponent,
    ImageClockComponent,
    PageSectionComponent,
    SafeHtmlPipe,
  ],
  imports: [BrowserModule, RouterModule],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
