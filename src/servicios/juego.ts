import {Injectable, Inject} from '@angular/core';
import {Personaje} from './beans/personaje';
import {Historia} from './beans/historia';
import {AlmacenamientoDatos} from './almacenamientoDatos';

@Injectable()
export class Juego{

	private jugador: Personaje;

	private historia: Historia;

	private arrayHistoria: Array<Historia>;

	private jugadorBloqueado:boolean;

	private nivelFinal:number;

	private fechaInicio:Date;

	private tiempoTotal:number;

	private titulo:string;

	constructor(private bbdd:AlmacenamientoDatos){
		this.jugador = new Personaje();
		this.historia = new Historia();
		this.arrayHistoria = new Array<Historia>();
		this.jugadorBloqueado=false;
		this.nivelFinal=0;
		this.fechaInicio=new Date();
		this.tiempoTotal=0;
		this.titulo="";
	}

	public setTitulo(titu:string){
		this.titulo = titu;
	}

	public getTitulo():string{
		return this.titulo;
	}

	public setNivelFinal(nivel:number){
		this.nivelFinal = nivel;
	}

	public getNivelFinal():number{
		return this.nivelFinal;
	}

	public setFechaInicio(fecha:Date){
		this.fechaInicio = fecha;
	}

	public getFechaInicio():Date{
		return this.fechaInicio;
	}

	public setTiempoTotal(tiempo:number){
		this.tiempoTotal = tiempo;
	}

	public getTiempoTotal():number{
		return this.tiempoTotal;
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
		var valorhist=this.arrayHistoria.find(x=>x==hist);
		if (!valorhist){
			this.arrayHistoria.push(hist);
		}
	}

	public getHistoria():Historia{
		return this.historia;
	}

	public getArrayHistoria():Array<Historia>{
		return this.arrayHistoria;
	}
	
	public guardarJuego(){
		this.bbdd.guardar("historias",JSON.parse(JSON.stringify(this.arrayHistoria)));
		this.bbdd.guardar("jugadorPrincipal",<JSON>this.jugador.toJSON());
		this.bbdd.guardar("bloqueado",JSON.parse(JSON.stringify(this.jugadorBloqueado)));
	}

	public cargarJuego(){

		this.bbdd.extraer("historias").then(
		    datos => {
		    	for (let indice in datos){
		    		this.setHistoria(Historia.fromJSON(datos[indice]));
		    	}
		    },
		    error => console.error('Error storing item', error)
		  );

		this.bbdd.extraer("jugadorPrincipal").then(
		    datos => {
		    	this.setJugador(Personaje.fromJSON(datos));
		    },
		    error => console.error('Error storing item', error)
		  );

		this.bbdd.extraer("bloqueado").then(
		    datos => {
		    	this.setJugadorBloqueado(<boolean>datos)
		    },
		    error => console.error('Error storing item', error)
		  );
	}

	public configurarJuego(configuracion:JSON){
		this.titulo=configuracion["titulo"];
		this.nivelFinal=configuracion["nivelFinal"];
		if (this.titulo!="" && this.nivelFinal>0){
			return true;
		}else{
			return false;
		}
	}
}