import {Personaje} from './beans/personaje';
import {Constantes} from './constantes';
import {Injectable} from '@angular/core';

@Injectable()
export class Combate{

	private static defensaBasica(personaje:Personaje):number{

		//let resis=personaje.getResistencia()/Constantes.NIVEL_MAXIMO_POR_HABILIDAD;
		//let suerte= (Math.floor(Math.random() * ( personaje.getSuerte() - 0 + 1)) + 0)/11;
		let defensa=personaje.getDefensa();

		//return (defensa*resis*suerte);
		return defensa;
	}

	private static ataqueBasico(personaje:Personaje):number{

		//let resis=personaje.getResistencia()/Constantes.NIVEL_MAXIMO_POR_HABILIDAD;
		//let suerte= (Math.floor(Math.random() * ( personaje.getSuerte() - 0 + 1)) + 0)/11;
		let fuerza=personaje.getFuerza();

		//return (fuerza*resis*suerte);
		return fuerza;
	}
	

	public static utilizarAtaquePrimario(luchadorAtaque:Personaje,luchadorDefensa:Personaje):number{

		
		var nivelAtaque:number=Combate.ataqueBasico(luchadorAtaque);
		var nivelDefensa:number=Combate.defensaBasica(luchadorDefensa);
		return this.combate(luchadorAtaque,luchadorDefensa,nivelAtaque,nivelDefensa);
	}


	private static combate(luchadorAtaque:Personaje,luchadorDefensa:Personaje,nivelAtaque:number,nivelDefensa:number):number{
		var victoria:number=-1;
		var potencia=nivelAtaque-nivelDefensa;
		console.log("POTENCIA ES: " + potencia);

		if (potencia<0){
			luchadorAtaque.setResistencia(luchadorAtaque.getResistencia()-1);
			victoria=2;
			if (luchadorAtaque.getResistencia()==0){
				victoria=0;
			}
		}else{
			luchadorDefensa.setVida(luchadorDefensa.getVida()-potencia);
			if (luchadorDefensa.getVida()<=0){
				victoria=1;
			}
		}
		return victoria;
	}

	public static reduccionVidaPersonaje(person:Personaje):number{
		let vida=person.getVida();
		return Math.floor(vida*Constantes.PERDIDA_POR_BATALLA);
	}

	public static reduccionResistenciaPersonaje(person:Personaje):number{
		let resistencia=person.getResistencia();
		return Math.floor(resistencia*Constantes.PERDIDA_POR_BATALLA);
	}

	public static utilizarAtaqueSecundario(luchadorAtaque:Personaje,luchadorDefensa:Personaje,ataqueUtilizado:number):number{

		var victoria=-1;
		var arrayAtaquesEspeciales=luchadorAtaque.getAtaqueEspecial();

		//Comprobamos si el luchador que ataca tiene el ataque que estamos pidiendo
		let valores=arrayAtaquesEspeciales.find(x=>x===ataqueUtilizado);
		if (valores){
			switch (ataqueUtilizado) {
				case 0:
					this.sumaDefensa(luchadorAtaque);
					victoria=3;
					break;
				case 1:
					this.sumaFuerza(luchadorAtaque);
					victoria=3;
					break;
				case 2:
					this.sumaVida(luchadorAtaque);
					victoria=3;
					break;
				case 3:
					this.absorverResistencia(luchadorAtaque,luchadorDefensa);
					victoria=3;
					break;
				case 4:
					this.sumaSuerte(luchadorAtaque);
					victoria=3;
					break;
				case 5:
					victoria=this.combate(luchadorAtaque,luchadorDefensa,this.golpeMaximo(luchadorAtaque),this.defensaBasica(luchadorDefensa))
					break;
			}

		}

		return victoria;
	}

	private static sumaDefensa(luchadorAtaque:Personaje):void{
		if (luchadorAtaque.getDefensa()<=Constantes.NIVEL_MAXIMO_POR_HABILIDAD){
			luchadorAtaque.setDefensa(luchadorAtaque.getDefensa()+Constantes.DOBLE_NIVEL_COMBATE);
		}
	}

	private static sumaFuerza(luchadorAtaque:Personaje):void{
		if (luchadorAtaque.getFuerza()<=Constantes.NIVEL_MAXIMO_POR_HABILIDAD){
			luchadorAtaque.setFuerza(luchadorAtaque.getFuerza()+Constantes.DOBLE_NIVEL_COMBATE);
		}
	}

	private static sumaVida(luchadorAtaque:Personaje):void{
		if (luchadorAtaque.getVida()<=Constantes.NIVEL_MAXIMO_POR_HABILIDAD){
			luchadorAtaque.setVida(luchadorAtaque.getVida()+Constantes.SIMPLE_NIVEL_COMBATE);
		}
	}

	private static absorverResistencia(luchadorAtaque:Personaje,luchadorDefensa:Personaje):void{
		if (luchadorAtaque.getResistencia()<=Constantes.NIVEL_MAXIMO_POR_HABILIDAD){
			luchadorAtaque.setResistencia(luchadorAtaque.getResistencia()+Constantes.SIMPLE_NIVEL_COMBATE);
			if (luchadorDefensa.getResistencia()>0){
				luchadorDefensa.setResistencia(luchadorDefensa.getResistencia()-Constantes.SIMPLE_NIVEL_COMBATE);
			}
		}
	}

	private static sumaSuerte(luchadorAtaque:Personaje):void{
		if (luchadorAtaque.getSuerte()<=Constantes.NIVEL_MAXIMO_POR_HABILIDAD){
			luchadorAtaque.setSuerte(luchadorAtaque.getSuerte()+Constantes.CUADRUPLE_NIVEL_COMBATE);
		}
	}

	private static golpeMaximo(luchadorAtaque:Personaje):number{
		return Combate.ataqueBasico(luchadorAtaque) * Constantes.TRIPLE_NIVEL_COMBATE;
	}


}


