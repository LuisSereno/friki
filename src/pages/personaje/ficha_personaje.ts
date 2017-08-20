import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Skills} from '../../componentes/skills/skills'
import {Personaje} from '../../servicios/beans/personaje'

@Component({
  selector: 'page-home',
  templateUrl: 'ficha_personaje.html'
})
export class FichaPersonaje {
	
	personajito: Personaje;

	constructor(public navCtrl: NavController) {
		this.personajito=new Personaje();
	}
}