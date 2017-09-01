import { Component,ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FichaPersonaje } from '../../personaje/ficha_personaje';
import { HistoriaPantalla } from '../../historia/historia';
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

  resolucionDesenlace:boolean;


  constructor(public navCtrl: NavController, public juego:Juego,private iab: InAppBrowser) {
    this.resolucionPresentacion=false;
    this.resolucionNudo=false;
    this.resolucionDesenlace=false;
  }

  ionViewWillEnter(){
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
    console.log("se queda pillado aqui");
    var todoCompleto=null;
    todoCompleto = this.juego.getHistoria().getPresentacion().find(x => (x.estado != true));
    if (!todoCompleto){
      this.resolucionPresentacion=true;
    }

    todoCompleto = this.juego.getHistoria().getNudo().find(x => x.estado != true);
    if (!todoCompleto){
      this.resolucionNudo=true;
    }

    todoCompleto = this.juego.getHistoria().getDesenlace().find(x => x.estado != true);
    if (!todoCompleto){
      this.resolucionDesenlace=true;
    }

    if (this.resolucionDesenlace&&this.resolucionNudo&&this.resolucionPresentacion){
      console.log("se queda pillado aqui 2");
      console.log(this.juego.getHistoria().getOrden());
      console.log(this.juego.getNivelFinal());
      if (this.juego.getHistoria().getOrden()===this.juego.getNivelFinal()){
        console.log("VIAJA A LA PANTALLA DE HISTORIAS");
        var diffMs = Math.abs(new Date().getTime() - this.juego.getFechaInicio().getTime()); // milliseconds between now & Christmas
        var diffMins:number = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        this.juego.setTiempoTotal(diffMins);
        this.navCtrl.setRoot(HistoriaPantalla);
      }
      this.juego.getHistoria().setTerminada(true);
      this.juego.guardarJuego();
    }
  }

}