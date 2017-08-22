import { Component,ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { FichaPersonaje } from '../../personaje/ficha_personaje';
import { Juego } from '../../../servicios/juego';
import { Accion } from '../../../servicios/beans/accion';
import { CastilloAdivinanza } from '../adivinanza/adivinanza';
import { List } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'castillo-listado',
  templateUrl: 'listado.html'
})
export class CastilloListado {

  resolucionPresentacion:boolean;

  resolucionNudo:boolean;


  constructor(public navCtrl: NavController, public juego:Juego,private iab: InAppBrowser) {
    this.resolucionPresentacion=false;
    this.resolucionNudo=false;
  }

  ngDoCheck(){
    this.comprobarAccionesTerminadas();
  }
  
  public abrirURL(accion:Accion){
       accion.estado=true;
       this.iab.create(accion.url)

  }

  public pantallaHistoria(accion:Accion,texto:boolean){
    this.navCtrl.push(CastilloAdivinanza,{paramAccion:accion,paramText:texto});
  }

  public pantallaEnemigo(accion:Accion){
    this.navCtrl.push(FichaPersonaje,{paramAccion:accion});
  }

  public comprobarAccionesTerminadas(){
    var todoCompleto=null;
    todoCompleto = this.juego.getHistoria().getPresentacion().find(x => (x.estado != true));
    if (!todoCompleto){
      this.resolucionPresentacion=true;
    }

    todoCompleto = this.juego.getHistoria().getNudo().find(x => x.estado != true);
    if (!todoCompleto){
      this.resolucionNudo=true;
    }
  }

}