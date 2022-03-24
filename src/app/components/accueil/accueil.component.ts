import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public isActive:boolean =true;
  public hasheader:boolean = true;


  //Annimation chiffre Affaire
  public chiffreAffaire:number = 0;
  chiffreAffaireStop:any =setInterval(()=>{
    this.chiffreAffaire++;
    if(this.chiffreAffaire==500){clearInterval(this.chiffreAffaireStop);}
  },15);

  public immeubles :number = 0;
  immeublesStop:any =setInterval(()=>{
    this.immeubles ++;
    if(this.immeubles ==50){clearInterval(this.immeublesStop);}
  },75);

  public partenaires:number = 0;
  partenairesStop:any =setInterval(()=>{
    this.partenaires++;
    if(this.partenaires==50){clearInterval(this.partenairesStop);}
  },75);

  public collaborateurs:number = 0;
  collaborateursStop:any =setInterval(()=>{
    this.collaborateurs++;
    if(this.collaborateurs==300){clearInterval(this.collaborateursStop);}
  },15);

  public terrain:number = 0;
  terrainStop:any =setInterval(()=>{
    this.terrain++;
    if(this.terrain==50){clearInterval(this.terrainStop);}
  },75);

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }




  goAccueil(){
    this.router.navigate(['/accueil'])
    .then(() => {
      window.location.reload();
    });
  }
  goTriodi(){
    this.router.navigate(['/triodi'])
    .then(() => {
      window.location.reload();
    });
  }
  goMaka(){
    this.router.navigate(['/maka'])
    .then(() => {
      window.location.reload();
    });
  }
  goMatura(){
    this.router.navigate(['/matura'])
    .then(() => {
      window.location.reload();
    });
  }
  goContact(){
    this.router.navigate(['/contact'])
    .then(() => {
      window.location.reload();
    });
  }

}
