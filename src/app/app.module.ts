import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WhiteBtnComponent } from './white-btn/white-btn.component';

@NgModule({
  declarations: [AppComponent, WhiteBtnComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
