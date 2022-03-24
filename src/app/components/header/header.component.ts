import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isActiveAcceuil:boolean =true;
  public isActiveFiliales:boolean =false;
  public isActiveRealisations:boolean =false;
  public IsActiveProjets:boolean =false;
  public isActiveContact:boolean =false;
//pour savoir si la page a la baniere
  public hasheader:boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public trueheader(){
    this.hasheader=true;
  }
  public falseheader(){
    this.hasheader=false;
  }
  goAccueil(){
    this.isActiveAcceuil=true;
    this.isActiveFiliales=false;
    this.isActiveRealisations=false;
    this.IsActiveProjets=false;
    this.isActiveContact=false;

    this.trueheader();
    this.router.navigate(['/accueil'])
    .then(() => {
      window.location.reload();
    });
  }
  goTriodi(){
    this.isActiveAcceuil=false;
    this.isActiveFiliales=true;
    this.isActiveRealisations=false;
    this.IsActiveProjets=false;
    this.isActiveContact=false;

    this.trueheader();
    this.router.navigate(['/triodi'])
    .then(() => {
      window.location.reload();
    });
  }
  goMaka(){
    this.isActiveAcceuil=false;
    this.isActiveFiliales=false;
    this.isActiveRealisations=true;
    this.IsActiveProjets=false;
    this.isActiveContact=false;

    this.trueheader();
    this.router.navigate(['/maka'])
    .then(() => {
      window.location.reload();
    });
  }
  goMatura(){
    this.isActiveAcceuil=false;
    this.isActiveFiliales=false;
    this.isActiveRealisations=false;
    this.IsActiveProjets=true;
    this.isActiveContact=false;

    this.trueheader();
    this.router.navigate(['/matura'])
    .then(() => {
      window.location.reload();
    });
  }
  goContact(){
    this.isActiveAcceuil=false;
    this.isActiveFiliales=false;
    this.isActiveRealisations=false;
    this.IsActiveProjets=false;
    this.isActiveContact=true;

    this.falseheader();
    this.router.navigate(['/contact']);
    
  }
  goFiliales(){
    this.isActiveAcceuil=false;
    this.isActiveFiliales=true;
    this.isActiveRealisations=false;
    this.IsActiveProjets=false;
    this.isActiveContact=false;

    this.trueheader();
    this.router.navigate(['/filiales'])
  
  }
  goProjets(){
    this.isActiveAcceuil=false;
    this.isActiveFiliales=false;
    this.isActiveRealisations=false;
    this.IsActiveProjets=true;
    this.isActiveContact=false;

    this.trueheader();
    this.router.navigate(['/projets'])
    
  }
  goRealisation(){
    this.isActiveAcceuil=false;
    this.isActiveFiliales=false;
    this.isActiveRealisations=true;
    this.IsActiveProjets=false;
    this.isActiveContact=false;

    this.trueheader();
    this.router.navigate(['/realisations'])
   // .then(() => {
     // window.location.reload();
    //});
  }

}
