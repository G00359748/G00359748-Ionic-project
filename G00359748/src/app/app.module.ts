import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {IonicStorageModule} from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InformationPage } from "../pages/information/information";
import { MoyrusPage } from '../pages/moyrus/moyrus';
import {CarnaBayPage} from "../pages/carnabay/carnabay";
import {JoeHeaneyPage} from "../pages/joeheaney/joeheaney";
import {MoransBarPage} from "../pages/morans/morans";
import {MacDarasIslandPage} from "../pages/macdara/macdara";
import {ContactUsPage} from "../pages/contactus/contactus";

//I am after importing my pages that I have into this feature and I have also declared them down below

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InformationPage,
    MoyrusPage,
    CarnaBayPage,
    JoeHeaneyPage,
    MoransBarPage,
    MacDarasIslandPage,
    ContactUsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InformationPage,
    MoyrusPage,
    CarnaBayPage,
    JoeHeaneyPage,
    MoransBarPage,
    MacDarasIslandPage,
    ContactUsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
