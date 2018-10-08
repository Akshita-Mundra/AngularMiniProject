import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const appRoute:Routes=
[
    {path:'',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports:[RouterModule],
  declarations: []
})


export class AppRoutingModule { }
