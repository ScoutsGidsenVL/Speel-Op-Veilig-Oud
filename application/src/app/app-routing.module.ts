import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'wegwijs', loadChildren: './static/wegwijs.module#WegwijsPageModule' },
  { path: 'noodsituatie', loadChildren: './static/noodsituatie.module#NoodsituatiePageModule' },
  { path: 'activiteit', loadChildren: './static/activiteit.module#ActiviteitPageModule' },
  { path: 'verzekeringen', loadChildren: './static/verzekeringen.module#VerzekeringenPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
