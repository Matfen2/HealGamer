import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { Routes, RouterModule } from '@angular/router';
import { WellPageComponent } from './well-page/well-page.component';
import { AntiInflammatoryPageComponent } from './anti-inflammatory-page/anti-inflammatory-page.component';

const routesPages : Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: 'main-page', component: MainPageComponent},
  {path: 'log-in-page', component: LogInPageComponent},
  {path: 'sign-up-page', component: SignUpPageComponent},
  {path: 'well-page', component: WellPageComponent},
  {path: 'anti-inflammatory-page', component: AntiInflammatoryPageComponent}
]

@NgModule({
  declarations: [
    MainPageComponent,
    LogInPageComponent,
    SignUpPageComponent,
    WellPageComponent,
    AntiInflammatoryPageComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routesPages),
  ]
})
export class PagesModule { }
