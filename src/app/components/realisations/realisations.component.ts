import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.css']
})
export class RealisationsComponent implements OnInit {

  constructor() { }
 // public tagsAll:boolean=true;
  public tagsImmobilier:boolean =false;
  public tagsDistribution:boolean =true;
  public tagsTourisme:boolean =false;
  public tagsHotellerie:boolean =false;
  public tagsBTP:boolean =false;
  public tagsTransport:boolean =false;

  ngOnInit(): void {
  }

  public showAll(){
    //this.tagsAll=true;
    this.tagsImmobilier=true;
    this.tagsDistribution=true;
    this.tagsTourisme=true;
    this.tagsHotellerie=true;
    this.tagsBTP=true;
    this.tagsTransport=true;
  }
  public showImmobilier(){
    //this.tagsAll=false;
    this.tagsImmobilier=true;
    this.tagsDistribution=false;
    this.tagsTourisme=false;
    this.tagsHotellerie=false;
    this.tagsBTP=false;
    this.tagsTransport=false;
  }
  public showDistribution(){
    //this.tagsAll=false;
    this.tagsImmobilier=false;
    this.tagsDistribution=true;
    this.tagsTourisme=false;
    this.tagsHotellerie=false;
    this.tagsBTP=false;
    this.tagsTransport=false;
  }
  public showTourisme(){
    //this.tagsAll=false;
    this.tagsImmobilier=false;
    this.tagsDistribution=false;
    this.tagsTourisme=true;
    this.tagsHotellerie=false;
    this.tagsBTP=false;
    this.tagsTransport=false;
  }
  public showHotellerie(){
    //this.tagsAll=false;
    this.tagsImmobilier=false;
    this.tagsDistribution=false;
    this.tagsTourisme=false;
    this.tagsHotellerie=true;
    this.tagsBTP=false;
    this.tagsTransport=false;
  }
  public showBTP(){
    //this.tagsAll=false;
    this.tagsImmobilier=false;
    this.tagsDistribution=false;
    this.tagsTourisme=false;
    this.tagsHotellerie=false;
    this.tagsBTP=true;
    this.tagsTransport=false;
  }
  public showtransport(){
    //this.tagsAll=false;
    this.tagsImmobilier=false;
    this.tagsDistribution=false;
    this.tagsTourisme=false;
    this.tagsHotellerie=false;
    this.tagsBTP=false;
    this.tagsTransport=true;
  }

}
