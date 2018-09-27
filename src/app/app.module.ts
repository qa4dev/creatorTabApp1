import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { FaqPage } from '../pages/faq/faq';
import { CustomersupportPage } from '../pages/customersupport/customersupport';
import { HowworksPage } from '../pages/howworks/howworks';
import { MyupcomingtripPage } from '../pages/myupcomingtrip/myupcomingtrip';
import { PartnershipPage } from '../pages/partnership/partnership';
import { AboutPage } from '../pages/about/about';


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        FaqPage,
        CustomersupportPage,
        HowworksPage,
        MyupcomingtripPage,
        PartnershipPage,
        AboutPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        FaqPage,
        CustomersupportPage,
        HowworksPage,
        MyupcomingtripPage,
        PartnershipPage,
        AboutPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }