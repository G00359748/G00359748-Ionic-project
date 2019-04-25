import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InformationPage } from "../pages/information/information";
import {MoyrusPage} from "../pages/moyrus/moyrus";
import {CarnaBayPage} from "../pages/carnabay/carnabay";
import {JoeHeaneyPage} from "../pages/joeheaney/joeheaney";
import {MoransBarPage} from "../pages/morans/morans";
import {MacDarasIslandPage} from "../pages/macdara/macdara";
import {ContactUsPage} from "../pages/contactus/contactus";

//I am after importing my pages that I have into the component feature

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

