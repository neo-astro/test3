import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DetailsComponent } from './components/details/details.component';
import { HistoriesComponent } from './components/histories/histories.component';
import { ClasificationComponent } from './components/clasification/clasification.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: '', component:WelcomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'details', component:DetailsComponent},
  {path: 'histories', component:HistoriesComponent},
  {path: 'clasification', component:ClasificationComponent},
  {path: 'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
