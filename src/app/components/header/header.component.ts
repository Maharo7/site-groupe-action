import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isActiveAcceuil:boolean =true;
  public isActiveTriodi:boolean =false;
  public isActiveMaka:boolean =false;
  public isActiveMatura:boolean =false;
  public isActiveContact:boolean =false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goAccueil(){
    this.isActiveAcceuil=true;
    this.isActiveTriodi=false;
    this.isActiveMaka=false;
    this.isActiveMatura=false;
    this.isActiveContact=false;
    this.router.navigate(['/accueil'])
    .then(() => {
      window.location.reload();
    });
  }
  goTriodi(){
    this.isActiveAcceuil=false;
    this.isActiveTriodi=true;
    this.isActiveMaka=false;
    this.isActiveMatura=false;
    this.isActiveContact=false;
    this.router.navigate(['/triodi'])
    .then(() => {
      window.location.reload();
    });
  }
  goMaka(){
    this.isActiveAcceuil=false;
    this.isActiveTriodi=false;
    this.isActiveMaka=true;
    this.isActiveMatura=false;
    this.isActiveContact=false;
    this.router.navigate(['/maka'])
    .then(() => {
      window.location.reload();
    });
  }
  goMatura(){
    this.isActiveAcceuil=false;
    this.isActiveTriodi=false;
    this.isActiveMaka=false;
    this.isActiveMatura=true;
    this.isActiveContact=false;
    this.router.navigate(['/matura'])
    .then(() => {
      window.location.reload();
    });
  }
  goContact(){
    this.isActiveAcceuil=false;
    this.isActiveTriodi=false;
    this.isActiveMaka=false;
    this.isActiveMatura=false;
    this.isActiveContact=true;
    this.router.navigate(['/contact'])
    .then(() => {
      window.location.reload();
    });
  }

}
