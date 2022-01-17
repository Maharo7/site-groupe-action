import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public isActive:boolean =true

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
