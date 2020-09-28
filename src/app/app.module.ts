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
import { DataComponent } from './data/data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    WhiteBtnComponent,
    MainSectionComponent,
    ImageClockComponent,
    PageSectionComponent,
    InputUserDataFormComponent,
    routingComponents,
    DataComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ScrollingModule,
    VirtualScrollerModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
