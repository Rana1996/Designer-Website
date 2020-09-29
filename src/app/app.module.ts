import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WhiteBtnComponent } from './components/protfolio-components/white-btn/white-btn.component';
import { MainSectionComponent } from './components/protfolio-components/main-section/main-section.component';
import {RouterModule, Scroll} from "@angular/router";
import {ImageService} from "./providers/image.service";
import { ImageClockComponent } from './components/protfolio-components/image-block/image-block.component';
import { PageSectionComponent } from './components/protfolio-components/page-section/page-section.component';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {VirtualScrollerModule} from "ngx-virtual-scroller";
import { InputUserDataFormComponent } from './components/sign-in-components/input-user-data-form/input-user-data-form.component';
import {AppRoutingModule, routingComponents} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DataComponent } from './components/data-components/data/data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/data-components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { EditSectionCardComponent } from './components/data-components/edit-section-card/edit-section-card.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";

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
    HeaderComponent,
    EditSectionCardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ScrollingModule,
    VirtualScrollerModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
