import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from "./components/sign-in-components/sign-in/sign-in.component";
import {MainPageComponent} from "./components/protfolio-components/main-page/main-page.component";
import {DataComponent} from "./components/data-components/data/data.component";


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'data', component: DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [MainPageComponent, SignInComponent ];
