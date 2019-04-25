import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoyrusPage } from './../moyrus/moyrus';
import {CarnaBayPage} from './../carnabay/carnabay'
import {JoeHeaneyPage} from './../joeheaney/joeheaney'
import {MoransBarPage} from './../morans/morans'
import {MacDarasIslandPage} from './../macdara/macdara'
import {ContactUsPage} from './../contactus/contactus'

//Several constructors for navagation are set up on this page so they can be opened from the information page

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationPage {

  constructor(public navCtrl: NavController) {

  }

  openMoyrus() {
    this.navCtrl.push(MoyrusPage);
    }
   
  openCarnabay() {
        this.navCtrl.push(CarnaBayPage);
        }

    openJoeheaney() {
            this.navCtrl.push(JoeHeaneyPage);
            }

    openMorans() {
                this.navCtrl.push(MoransBarPage);
                }

    openMacdara() {
        this.navCtrl.push(MacDarasIslandPage);
    }

    openContact() {
        this.navCtrl.push(ContactUsPage);
    }


    

}

