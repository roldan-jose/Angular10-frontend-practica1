import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpEmailComponent } from './components/help-email/help-email.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registros/registro.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'correo', component: HelpEmailComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
