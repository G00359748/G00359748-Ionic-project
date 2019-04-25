webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information_information__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//I put a navagation structure in to open the information page
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openInformation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__information_information__["a" /* InformationPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\G00359748\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Carna Tourism App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  Welcome to the Carna Tourism App\n\n  <ion-img width="300" height="250" src="../assets/imgs/macepier.jpg"></ion-img>\n\n  <p>\n   This app is a guide to the best attractions to go if you\'re touring Carna.\n  </p>\n\n \n\n  <button ion-button (click)="openInformation()">Please Enter</button>\n  \n</ion-content>\n'/*ion-inline-end:"C:\G00359748\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moyrus_moyrus__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carnabay_carnabay__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__joeheaney_joeheaney__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__morans_morans__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__macdara_macdara__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contactus_contactus__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//Several constructors for navagation are set up on this page so they can be opened from the information page
var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InformationPage.prototype.openMoyrus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__moyrus_moyrus__["a" /* MoyrusPage */]);
    };
    InformationPage.prototype.openCarnabay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__carnabay_carnabay__["a" /* CarnaBayPage */]);
    };
    InformationPage.prototype.openJoeheaney = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__joeheaney_joeheaney__["a" /* JoeHeaneyPage */]);
    };
    InformationPage.prototype.openMorans = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__morans_morans__["a" /* MoransBarPage */]);
    };
    InformationPage.prototype.openMacdara = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__macdara_macdara__["a" /* MacDarasIslandPage */]);
    };
    InformationPage.prototype.openContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__contactus_contactus__["a" /* ContactUsPage */]);
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"C:\G00359748\src\pages\information\information.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Information About Carna\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  \n\n\n\n  <ion-content padding>\n\n    Introduction to Carna\n\n    <ion-img width="300" height="250" src="../assets/imgs/carna.jpg"></ion-img>\n\n    <p>\n\n      Carna is a small village situated in Connemara Co.Galway located in the west of Ireland and it\'s an area mainly dominated by people who speak both Irish and English.It is well known for it\'s use of the Irish Language and is also known for it\'s traditional music and singing as it has produced many famous musicians, dancers and singers over the years.It is also known for it\'s beautiful scenery and beaches around the place especially in the summertime.In this app I have listed either events or place which I would recommend to go if you were to ever visit the village of Carna.Please fell free to click on any of these down below.\n\n    </p>\n\n\n\n    //All the buttons to open from the navagation page\n\n  \n\n    <button ion-button (click)="openMoyrus()">Moyrus Beach</button>\n\n    <button ion-button (click)="openCarnabay()">Carna Bay Hotel</button>\n\n    <button ion-button (click)="openJoeheaney()">Joe Heaney Festival</button>\n\n    <button ion-button (click)="openMorans()">Moran\'s Bar</button>\n\n    <button ion-button (click)="openMacdara()">MacDara\'s Island</button>\n\n    <button ion-button (click)="openContact()">Contact Us</button>\n\n    \n\n  </ion-content>'/*ion-inline-end:"C:\G00359748\src\pages\information\information.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoyrusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoyrusPage = /** @class */ (function () {
    function MoyrusPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MoyrusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-moyrus',template:/*ion-inline-start:"C:\G00359748\src\pages\moyrus\moyrus.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Moyrus Beach\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  //adding an image and writing the text for the page\n\n\n\n  <ion-content padding>\n\n    A piece on Moyrus Beach\n\n    <ion-img width="300" height="250" src="../assets/imgs/beach.jpg"></ion-img>\n\n    <p>\n\n        Moyrus Beach is loacated in Moyrus in the village of Carna Co.Galway.I would recommended that this the best beach to go to on a nice summers day.It is also the safest beach around the village and it\'s highly recommended by the local people when tourists ask for directions to the loacal beach.This Beach would be the longest beach in the village of Carna as it is separated into different sections.\n\n    </p>\n\n  \n\n    \n\n  </ion-content>'/*ion-inline-end:"C:\G00359748\src\pages\moyrus\moyrus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], MoyrusPage);
    return MoyrusPage;
}());

//# sourceMappingURL=moyrus.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarnaBayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarnaBayPage = /** @class */ (function () {
    function CarnaBayPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CarnaBayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carna',template:/*ion-inline-start:"C:\G00359748\src\pages\carnabay\carnabay.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Carna Bay Hotel\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  //adding an image and writing the text for the page\n\n\n\n  <ion-content padding>\n\n    A piece on Carna Bay Hotel\n\n    <ion-img width="300" height="250" src="../assets/imgs/hotel.jpg"></ion-img>\n\n    <p>\n\n        CarnaBayHotel is the the premier hotel in the village of Carna.It is owned by Mary and Paraic Cloherty who have owned it for many years now and it\'s been very successful.When it first opened years ago it had seafood restaurant which served local and fresh seafood from the area but now the menu is more diverse.It is opened from March to November every year and it is closed for the remaining months.It\'s busiest time is during the summers with the amount of tourists who stay there.\n\n    </p>\n\n  \n\n    \n\n  </ion-content>'/*ion-inline-end:"C:\G00359748\src\pages\carnabay\carnabay.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CarnaBayPage);
    return CarnaBayPage;
}());

//# sourceMappingURL=carnabay.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoeHeaneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JoeHeaneyPage = /** @class */ (function () {
    function JoeHeaneyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    JoeHeaneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-joeheaney',template:/*ion-inline-start:"C:\G00359748\src\pages\joeheaney\joeheaney.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Joe Heaney Festival\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  //adding an image and writing the text for the page\n\n\n\n  <ion-content padding>\n\n    A piece on the Joe Heaney Festival\n\n    <ion-img width="300" height="250" src="../assets/imgs/joeheaney.jpg"></ion-img>\n\n    <p>\n\n        The Joe Heaney Festival is celebrated on the Bank Holiday May Weekend of every year.It is a tribute festival celebrating the late Sean-nos singer Joe Heaney(1919-1984) who hailed from Ard West, Carna, Co.Galway.Joe Heaney was a successful traditional sean-nos singer who sang in many parts of the world including Ireland,The Uk and America.Every year it holds a variety of events of which musicians and singers from anywhere in the world often take part in the music sessions or the concert from Friday to Monday.They also have an Under 9, Under 12, Under15 and Under18 sean-nos singing competition which prizes include first to third place and the Joe Heaney Memorial Cup for the overall winner of the competition.\n\n    </p>\n\n  \n\n    \n\n  </ion-content>'/*ion-inline-end:"C:\G00359748\src\pages\joeheaney\joeheaney.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], JoeHeaneyPage);
    return JoeHeaneyPage;
}());

//# sourceMappingURL=joeheaney.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoransBarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoransBarPage = /** @class */ (function () {
    function MoransBarPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MoransBarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-morans',template:/*ion-inline-start:"C:\G00359748\src\pages\morans\morans.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Moran\'s Bar\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  //adding an image and writing the text for the page\n\n\n\n  <ion-content padding>\n\n    A piece on Moran\'s Bar\n\n    <ion-img width="300" height="250" src="../assets/imgs/morans.jpg"></ion-img>\n\n    <p>\n\n        Morans Bar is the best pub that serves the nicest pint of Guinness in Carna.Even one of the National Papers the Sunday World gave the Pint a four out of five star rating on it\'s pub spy column back in 2009.That was a very good rating considering that the person writing the column was travelling around the country trying to find the best pint of Guinness in this Isle.Peter Fitzpatrick is the main man in the pub and has been running it for over twenty years and the barmaid Mary Hopkins has been working there for over fourty years.Those are the main two people that would be working if you were to go in for a drink and the are very welcoming to any person who visits the pub.\n\n    </p>\n\n  \n\n    \n\n  </ion-content>'/*ion-inline-end:"C:\G00359748\src\pages\morans\morans.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], MoransBarPage);
    return MoransBarPage;
}());

//# sourceMappingURL=morans.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MacDarasIslandPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MacDarasIslandPage = /** @class */ (function () {
    function MacDarasIslandPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MacDarasIslandPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-macdara',template:/*ion-inline-start:"C:\G00359748\src\pages\macdara\macdara.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        MacDara\'s Island\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  //adding an image and writing the text for the page\n\n\n\n  <ion-content padding>\n\n    A piece on MacDara\'s Island\n\n    <ion-img width="300" height="250" src="../assets/imgs/macdara.jpg"></ion-img>\n\n    <p>\n\n        MacDara\'s Island is an island located near Mace, Carna, Co.Galway.This Island is named after the saint MacDara who lived on this Island many years ago and built the stone building that\'s that\'s pictured above and it\'s also where he stayed during his time on the island.Every year on the 16th of July the locals from Carna and other people travel to the Island on boats where the parish priest of Carna Father Padraig Staunton performs mass to mark the occasion\n\n    </p>\n\n  \n\n    \n\n  </ion-content>'/*ion-inline-end:"C:\G00359748\src\pages\macdara\macdara.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], MacDarasIslandPage);
    return MacDarasIslandPage;
}());

//# sourceMappingURL=macdara.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contactus',template:/*ion-inline-start:"C:\G00359748\src\pages\contactus\contactus.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Contact Us\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  //adding the contact details for further information\n\n\n\n  <ion-content padding>\n\n    For more Information\n\n    <p>\n\n        Contact me by phone number:0876939942 or by way of Email:Shanomac97@gmail.com\n\n    </p>\n\n  \n\n    \n\n  </ion-content>'/*ion-inline-end:"C:\G00359748\src\pages\contactus\contactus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_information_information__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_moyrus_moyrus__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_carnabay_carnabay__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_joeheaney_joeheaney__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_morans_morans__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_macdara_macdara__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contactus_contactus__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//I am after importing my pages that I have into this feature and I have also declared them down below
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_moyrus_moyrus__["a" /* MoyrusPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_carnabay_carnabay__["a" /* CarnaBayPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_joeheaney_joeheaney__["a" /* JoeHeaneyPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_morans_morans__["a" /* MoransBarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_macdara_macdara__["a" /* MacDarasIslandPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contactus_contactus__["a" /* ContactUsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_moyrus_moyrus__["a" /* MoyrusPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_carnabay_carnabay__["a" /* CarnaBayPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_joeheaney_joeheaney__["a" /* JoeHeaneyPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_morans_morans__["a" /* MoransBarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_macdara_macdara__["a" /* MacDarasIslandPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contactus_contactus__["a" /* ContactUsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//I am after importing my pages that I have into the component feature
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\G00359748\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\G00359748\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map