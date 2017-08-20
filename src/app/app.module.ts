import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Qr } from '../pages/qr/qr';
import { Nfc } from '../pages/nfc/nfc';
import { FichaPersonaje } from '../pages/personaje/ficha_personaje';
import { TabsPage } from '../pages/tabs/tabs';
import { CastilloListado } from '../pages/castillo/listado/listado';
import { CastilloAdivinanza } from '../pages/castillo/adivinanza/adivinanza';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QRScanner } from '@ionic-native/qr-scanner';
import { NFC,Ndef } from '@ionic-native/nfc';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {Skills} from '../componentes/skills/skills'
import {Juego} from '../servicios/juego'

@NgModule({
  declarations: [
    MyApp,
    Qr,
    Nfc,
    FichaPersonaje,
    TabsPage,
    Skills,
    CastilloListado,
    CastilloAdivinanza
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Qr,
    Nfc,
    FichaPersonaje,
    TabsPage,
    CastilloListado,
    CastilloAdivinanza
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    InAppBrowser,
    NFC,
    Ndef,
    Juego,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
