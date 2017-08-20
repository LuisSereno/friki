import { Component,ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Historia } from '../../../servicios/beans/historia';
import { Adivinanza } from '../../../servicios/beans/adivinanza';
import { Juego } from '../../../servicios/juego';
import { CastilloAdivinanza } from '../adivinanza/adivinanza';
import { List } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'castillo-listado',
  templateUrl: 'listado.html'
})
export class CastilloListado {

  constructor(public navCtrl: NavController, public juego:Juego,private iab: InAppBrowser) {

  }

  ngOnInit(){
  	  
	}
  
  public abrirURL(url:string){
            
       this.iab.create(url)

  }
  

  public pantallaHistoria(texto:string|Adivinanza){
    this.navCtrl.push(CastilloAdivinanza,{paramText:texto});
  }

}