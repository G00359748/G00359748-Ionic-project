import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InformationPage } from './../information/information';

//I put a navagation structure in to open the information page

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openInformation() {
    this.navCtrl.push(InformationPage);
    }

    
    

}
