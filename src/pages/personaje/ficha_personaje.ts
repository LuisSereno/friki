import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {Skills} from '../../componentes/skills/skills'
import { Juego } from '../../servicios/juego';
import { Combate } from '../../servicios/combate';
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

	esEdicion:boolean;

	esEdicion_icono:string;

	flash_golpe_enemigo:string;

	flash_golpe_amigo:string;

	deshabilitarAtaquePrimario:boolean;

	deshabilitarAtaqueSecundario:boolean;

	juegoClonado:Juego;

	ataqueEspecial:number;

	turnoCombate:number;

	turnoSecundario:number;

	constructor(public navCtrl: NavController,public navParams: NavParams, public juego:Juego) {
		this.personajito=this.juego.getJugador();
		this.firstParam = navParams.get("paramAccion");
	}

	ionViewDidLoad() {
		this.esEdicion=!this.juego.getJugadorBloqueado();
		if(this.esEdicion){
			this.esEdicion_icono="unlock";
		}else{
			this.esEdicion_icono="lock";
			if (this.firstParam){
				this.turnoCombate=0;
				this.turnoSecundario=null;
				this.esCombate=true;
				//Aqui hacemos una copia del personaje para que cuando acabe el combate no sufra
				this.personajito=Object.assign(new Personaje(), this.personajito);
				//this.juegoClonado=Object.assign(new Juego(), this.juego);
				this.enemigito=this.firstParam.enemigo;
			}
		}

		this.flash_golpe_enemigo="";
		this.flash_golpe_amigo="";
		this.deshabilitarAtaquePrimario=false;
		this.deshabilitarAtaqueSecundario=false;
	}


	protected bloquearUsuario(){
		this.esEdicion_icono="lock";
		this.juego.setJugadorBloqueado(true);
		let arrayAtaques=new Array<number>();
		arrayAtaques.push( +this.ataqueEspecial);
		this.personajito.setAtaqueEspecial(arrayAtaques);
		this.juego.setJugador(this.personajito);
	}

	protected ataquePrimario(){

		this.turnoCombate=this.turnoCombate+1;

		this.deshabilitarAtaquePrimario=true;

		if (!this.ataqueSecundario(false,this.ataqueEspecial)){
				let finalizarCombate:number=Combate.utilizarAtaquePrimario(this.personajito,this.enemigito);
				if (finalizarCombate==1){
					this.flash_golpe_enemigo="animated flash-golpe";
					alert("Enhorabuena, lo conseguiste ¡Has derrotado a la bestia!");
					this.firstParam.estado=true;
					this.navCtrl.pop();
				}else if (finalizarCombate==0){
					this.flash_golpe_enemigo="animated flash-defensa";
					alert("No tienes fuerzas para seguir luchando");
					this.navCtrl.pop();
				}else{
					if (finalizarCombate!=2){
						this.flash_golpe_enemigo="animated flash-golpe";
					}else{
						this.flash_golpe_enemigo="animated flash-defensa";
					}
					this.ataqueEnemigo();
					
				}
		}else{
			this.deshabilitarAtaquePrimario=false;
		}

	}

	protected ataqueSecundario(pulsaboton:boolean,ataque:number):boolean{

		var ejecucionAtaqueSecundario:boolean=false;
		if (pulsaboton){
			this.ataqueEspecial= +ataque;
			this.turnoSecundario=this.turnoCombate;
			this.deshabilitarAtaqueSecundario=true;
			this.deshabilitarAtaqueSecundario=true;
			this.turnoCombate=this.turnoCombate+1;
			this.ataqueEnemigo();

		}
		if (this.turnoSecundario!=null){
			if (this.turnoCombate>=this.turnoSecundario + 2){
				Combate.utilizarAtaqueSecundario(this.personajito,this.enemigito,ataque)
				ejecucionAtaqueSecundario=true;
				this.deshabilitarAtaqueSecundario=false;
				this.turnoSecundario=null;
			}
		};
		
		return ejecucionAtaqueSecundario;
	}


	private gastoPersonajeCombate(){
		if (this.personajito.getVida()<this.juego.getJugador().getVida()){
			let vidaGastada=Combate.reduccionVidaPersonaje(this.personajito);
			this.juego.getJugador().setVida(this.juego.getJugador().getVida()-vidaGastada);
		}
		if (this.personajito.getResistencia()<this.juego.getJugador().getResistencia()){
			let resistenciaGastada=Combate.reduccionResistenciaPersonaje(this.personajito);
			this.juego.getJugador().setResistencia(this.juego.getJugador().getResistencia()-resistenciaGastada);
		}
	}

	private ataqueEnemigo(){
		var finalizarCombate:number;
		setTimeout(() =>{
						this.flash_golpe_enemigo="";
						setTimeout(() =>{
							this.flash_golpe_amigo="";
							this.deshabilitarAtaquePrimario=false;
						},2000);

						finalizarCombate=Combate.utilizarAtaquePrimario(this.enemigito,this.personajito);
						if (finalizarCombate==0){
							this.flash_golpe_amigo="animated flash-golpe";
							this.gastoPersonajeCombate();
							setTimeout(() =>{
								alert("Enhorabuena, lo conseguiste ¡Has derrotado a la bestia!");
								this.navCtrl.pop();
							},4000);
							this.firstParam.estado=true;
						}else if (finalizarCombate==1){
							this.flash_golpe_amigo="animated flash-defensa";
							this.gastoPersonajeCombate();
							setTimeout(() =>{
								alert("No tienes fuerzas para seguir luchando");
								this.navCtrl.pop();
							},4000);


						}else{
							if (finalizarCombate!=2){
								this.flash_golpe_amigo="animated flash-golpe";
							}else{
								this.flash_golpe_amigo="animated flash-defensa";
							}
						}

			} , 2000);
		}
}