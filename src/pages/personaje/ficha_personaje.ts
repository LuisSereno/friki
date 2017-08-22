import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {Skills} from '../../componentes/skills/skills'
import { Juego } from '../../servicios/juego';
import {Personaje} from '../../servicios/beans/personaje'
import { Accion } from '../../servicios/beans/accion';

@Component({
  selector: 'page-home',
  templateUrl: 'ficha_personaje.html'
})
export class FichaPersonaje {
	
	personajito: Personaje;

	enemigito: Personaje;

	firstParam:Accion;

	esCombate:boolean;

	constructor(public navCtrl: NavController,public navParams: NavParams, public juego:Juego) {
		this.personajito=new Personaje();
		this.firstParam = navParams.get("paramAccion");
	}

	ionViewDidLoad() {
		if (this.firstParam){
			this.enemigito=this.firstParam.enemigo
			this.esCombate=true;
		}
	}
}