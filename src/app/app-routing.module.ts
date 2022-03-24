import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactComponent } from './components/contact/contact.component';
import { MakaComponent } from './components/maka/maka.component';
import { MaturaComponent } from './components/matura/matura.component';
import { TriodiComponent } from './components/triodi/triodi.component';
import {FilialesComponent} from './components/filiales/filiales.component';
import {ProjetsComponent} from './components/projets/projets.component';
import {RealisationsComponent} from './components/realisations/realisations.component';
import { DistributionComponent } from './components/distribution/distribution.component';
import { ImmobilierComponent } from './components/immobilier/immobilier.component';
import { TourismeComponent } from './components/tourisme/tourisme.component';
import { BtpComponent } from './components/btp/btp.component';
import { HotellerieComponent } from './components/hotellerie/hotellerie.component';
import { TransportComponent } from './components/transport/transport.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'accueil', component: AccueilComponent },
  { path: 'triodi', component: TriodiComponent },
  { path: 'maka', component: MakaComponent },
  { path: 'matura', component: MaturaComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'filiales', component: FilialesComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'realisations', component: RealisationsComponent },
  { path: 'projets-distributionTransformation', component: DistributionComponent },
  { path: 'projets-immobilierCommerce', component: ImmobilierComponent },
  { path: 'projets-tourisme', component: TourismeComponent },
  { path: 'projets-hotellerieRestauration', component: HotellerieComponent },
  { path: 'projets-btp', component: BtpComponent },
  { path: 'projets-transport', component: TransportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
