import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FaqPage } from '../pages/faq/faq';
import { HomePage } from '../pages/home/home';
import { CustomersupportPage } from '../pages/customersupport/customersupport';
import { HowworksPage } from '../pages/howworks/howworks';
import { MyupcomingtripPage } from '../pages/myupcomingtrip/myupcomingtrip';
import { PartnershipPage } from '../pages/partnership/partnership';
import { AboutPage } from '../pages/about/about';





@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) navCtrl: Nav;
    rootPage: any = HomePage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    goToHome(params) {
        if (!params) params = {};
        this.navCtrl.setRoot(HomePage);
    } 
    goToFaq(params) {
        if (!params) params = {};
        this.navCtrl.setRoot(FaqPage);
    }
    goToCustomersupport(params) {
        if (!params) params = {};
        this.navCtrl.setRoot(CustomersupportPage);
    }
    goToHowWorks(params) {
        if (!params) params = {};
        this.navCtrl.setRoot(HowworksPage);
    }
    goToUpcomingTrips(params) {
        if (!params) params = {};
        this.navCtrl.setRoot(MyupcomingtripPage);
    }
    goTopartnerShip(params) {
        if (!params) params = {};
        this.navCtrl.setRoot(PartnershipPage);
    }
    goToAboutPage(params) {
        if (!params) params = {};
        this.navCtrl.setRoot(AboutPage);
    }
    
}
