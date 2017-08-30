import { Component,ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Juego } from '../../servicios/juego';
import { List } from 'ionic-angular';
import { Historia } from '../../servicios/beans/historia';
import { CastilloListado } from '../castillo/listado/listado';

@Component({
  selector: 'historia',
  templateUrl: 'historia.html'
})
export class HistoriaPantalla {

  constructor(public navCtrl: NavController, public juego:Juego) {

  }

  public pantallaHistoria(hist:Historia){
  	this.juego.setHistoria(hist);
    this.navCtrl.push(CastilloListado);
  }
}