import {Personaje} from './beans/personaje';
import {Historia} from './beans/historia';

export class Juego{

	private jugador: Personaje;

	private historia: Historia;

	private arrayHistoria: Array<Historia>;

	private jugadorBloqueado:boolean;

	constructor(){
		this.jugador = new Personaje();
		this.historia = new Historia();
		this.arrayHistoria = new Array<Historia>();
		this.jugadorBloqueado=false;
	}

	public setJugador(ata:Personaje){
		this.jugador = ata;
	}

	public getJugador():Personaje{
		return this.jugador;
	}

	public setJugadorBloqueado(bloq:boolean){
		this.jugadorBloqueado = bloq;
	}

	public getJugadorBloqueado():boolean{
		return this.jugadorBloqueado;
	}

	public getNivelJugador():number{

		let suma=this.getJugador().getAlma()+this.getJugador().getDefensa()+this.getJugador().getEsquivar()+
					this.getJugador().getFuerza()+this.getJugador().getMana()+
					this.getJugador().getResistencia()+this.getJugador().getSuerte()+
					this.getJugador().getVelocidad()+this.getJugador().getVida();
				
		return suma;
	}

	public setHistoria(hist:Historia){
		this.historia = hist;
		this.arrayHistoria.push(hist);
	}

	public getHistoria():Historia{
		return this.historia;
	}

	public getArrayHistoria():Array<Historia>{
		return this.arrayHistoria;
	}
	
}