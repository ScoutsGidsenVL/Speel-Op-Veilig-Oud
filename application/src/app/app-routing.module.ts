import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'wegwijs', loadChildren: './static/wegwijs.module#WegwijsPageModule' },
  { path: 'crisis-en-noodsituaties', loadChildren: './static/noodsituatie.module#NoodsituatiePageModule' },
  { path: 'veilige-activiteit', loadChildren: './static/activiteit.module#ActiviteitPageModule' },
  { path: 'verzekeringen-en-aansprakelijkheid', loadChildren: './static/verzekeringen.module#VerzekeringenPageModule' },
  { path: 'thema/:title', loadChildren: './thema.module#ThemaPageModule' },
  { path: 'intro', loadChildren: './intro.module#IntroPageModule' },
  { path: 'vragen-en-antwoorden', loadChildren: './faq.module#FaqPageModule' },
  { path: 'colofon', loadChildren: './colofon/colofon.module#ColofonPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
