import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from "./sign-in/sign-in.component";
import {MainPageComponent} from "./main-page/main-page.component";


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'signIn', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [MainPageComponent, SignInComponent ];
