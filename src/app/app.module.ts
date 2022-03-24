import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { FooterComponent } from './components/footer/footer.component';
import { TriodiComponent } from './components/triodi/triodi.component';
import { MakaComponent } from './components/maka/maka.component';
import { MaturaComponent } from './components/matura/matura.component';
import { ContactComponent } from './components/contact/contact.component';
import { FilialesComponent } from './components/filiales/filiales.component';
import { RealisationsComponent } from './components/realisations/realisations.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { DistributionComponent } from './components/distribution/distribution.component';
import { ImmobilierComponent } from './components/immobilier/immobilier.component';
import { TourismeComponent } from './components/tourisme/tourisme.component';
import { HotellerieComponent } from './components/hotellerie/hotellerie.component';
import { BtpComponent } from './components/btp/btp.component';
import { TransportComponent } from './components/transport/transport.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    FooterComponent,
    TriodiComponent,
    MakaComponent,
    MaturaComponent,
    ContactComponent,
    FilialesComponent,
    RealisationsComponent,
    ProjetsComponent,
    DistributionComponent,
    ImmobilierComponent,
    TourismeComponent,
    HotellerieComponent,
    BtpComponent,
    TransportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
