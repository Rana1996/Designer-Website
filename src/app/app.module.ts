import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WhiteBtnComponent } from './white-btn/white-btn.component';
import { MainSectionComponent } from './main-section/main-section.component';
import {RouterModule, Scroll} from "@angular/router";
import {ImageService} from "./providers/image.service";
import { ImageClockComponent } from './image-block/image-block.component';
import { PageSectionComponent } from './page-section/page-section.component';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {VirtualScrollerModule} from "ngx-virtual-scroller";
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import {AppRoutingModule, routingComponents} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    WhiteBtnComponent,
    MainSectionComponent,
    ImageClockComponent,
    PageSectionComponent,
    InputUserDataFormComponent,
    routingComponents
  ],
  imports: [BrowserModule,
    RouterModule,
    ScrollingModule,
    VirtualScrollerModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
