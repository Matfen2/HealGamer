import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { Routes, RouterModule } from '@angular/router';
import { WellPageComponent } from './well-page/well-page.component';
import { AntiInflammatoryPageComponent } from './anti-inflammatory-page/anti-inflammatory-page.component';
import { BreakfastPageComponent } from './breakfast-page/breakfast-page.component';
import { LunchPageComponent } from './lunch-page/lunch-page.component';
import { EveningDinnerPageComponent } from './evening-dinner-page/evening-dinner-page.component';
import { IdeaDirective } from './idea.directive';
import { BreakfastRecipesComponent } from './breakfast-recipes/breakfast-recipes.component';
import { LunchRecipesComponent } from './lunch-recipes/lunch-recipes.component';
import { DinnerRecipesComponent } from './dinner-recipes/dinner-recipes.component';

const routesPages : Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: 'main-page', component: MainPageComponent},
  {path: 'log-in-page', component: LogInPageComponent},
  {path: 'sign-up-page', component: SignUpPageComponent},
  {path: 'well-page', component: WellPageComponent},
  {path: 'breakfast-page', component: BreakfastPageComponent},
  {path: 'breakfast-recipes/:id', component: BreakfastRecipesComponent},
  {path: 'lunch-page', component: LunchPageComponent},
  {path: 'lunch-recipes/:id', component: LunchRecipesComponent},
  {path: 'evening-dinner-page', component: EveningDinnerPageComponent},
  {path: 'dinner-recipes/:id', component: DinnerRecipesComponent},
  {path: 'anti-inflammatory-page', component: AntiInflammatoryPageComponent}
]

@NgModule({
  declarations: [
    MainPageComponent,
    LogInPageComponent,
    SignUpPageComponent,
    WellPageComponent,
    AntiInflammatoryPageComponent,
    BreakfastPageComponent,
    LunchPageComponent,
    EveningDinnerPageComponent,
    IdeaDirective,
    BreakfastRecipesComponent,
    LunchRecipesComponent,
    DinnerRecipesComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routesPages),
  ]
})
export class PagesModule { }
