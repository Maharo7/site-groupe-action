import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactComponent } from './components/contact/contact.component';
import { MakaComponent } from './components/maka/maka.component';
import { MaturaComponent } from './components/matura/matura.component';
import { TriodiComponent } from './components/triodi/triodi.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'accueil', component: AccueilComponent },
  { path: 'triodi', component: TriodiComponent },
  { path: 'maka', component: MakaComponent },
  { path: 'matura', component: MaturaComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
