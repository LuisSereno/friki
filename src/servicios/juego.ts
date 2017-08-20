import {Personaje} from './beans/personaje';
import {Historia} from './beans/historia';

export class Juego{

	private jugador: Personaje;

	private historia: Historia;

	private arrayHistoria: Array<Historia>;

	constructor(){
		this.jugador = new Personaje();
		this.historia = new Historia();
		this.arrayHistoria = new Array<Historia>();
	}

	public setJugador(ata:Personaje){
		this.jugador = ata;
	}

	public getJugador():Personaje{
		return this.jugador;
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
	

/*	combate() {

		try{
			var diferenciaPuntos: number = 0;
			var diferenciaNivel: number = 0;
			var diferenciaDistancia: number = 0;
			var diferenciaSuerte: number = 0;

			this.puntosAta = this.atacante.ataquePrimario();
			this.puntosDef=this.atacante.defensaNormal();

			if (this.puntosAta>this.puntosDef){
				diferenciaPuntos = this.puntosAta-this.puntosDef;
			} else {
				diferenciaPuntos = this.puntosDef-this.puntosAta;
			}

			this.experienciaCombate = diferenciaPuntos;
		} catch (e) {
			alert(e);
		}
	}

	transformacion(){
		try{

			this.puntosAta=this.atacante.ataqueSecundario();
			this.puntosDef=this.atacante.defensaConversion();

			if (this .puntosAta>this.puntosDef){
			
			}else{
			
			}

		}catch(e){
			alert(e);
		}
	}

	*/

}