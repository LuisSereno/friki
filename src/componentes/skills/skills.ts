import { Component,Input } from '@angular/core';
import { Juego } from '../../servicios/juego';
import { Constantes } from '../../servicios/constantes';

@Component({
  selector: 'skills',
  templateUrl: 'skills.html'
})
export class Skills {


  @Input("tipo") datoNumber: number;

  @Input() cantidad: number;

  range: Array<number>= [0,1,2,3,4,5,6,7,8,9,10];

  VELOCIDAD = 1;

  ESQUIVAR = 2;

  DISTANCIA = 3;

  MANA = 4;
 
  RESISTENCIA = 5;

  ALMA = 6;

  SUERTE = 7;

  FUERZA = 8;

  VIDA = 9;

  DEFENSA = 10;

  constructor(public juego:Juego) {
  }

  seleccionarEstrella(indice:number){

    try{
      if (!this.juego.getJugadorBloqueado()){

       indice=indice+1;
       switch (this.datoNumber) {
         case this.VELOCIDAD:
           if (this.juego.getJugador().getVelocidad()>indice) this.juego.getJugador().setVelocidad(indice);
           else if ((this.juego.getNivelJugador() + indice)<=Constantes.MAXIMAS_ESTRELLAS) this.juego.getJugador().setVelocidad(indice);
           else{alert("El máximo de puntos a repartir es "  + Constantes.MAXIMAS_ESTRELLAS);throw new RangeError("Superadas estrellas a repartir");} 
           break;
         case this.ESQUIVAR:
           if (this.juego.getJugador().getEsquivar()>indice) this.juego.getJugador().setEsquivar(indice);
           else if ((this.juego.getNivelJugador() + indice)<=Constantes.MAXIMAS_ESTRELLAS) this.juego.getJugador().setEsquivar(indice);
           else{alert("El máximo de puntos a repartir es "  + Constantes.MAXIMAS_ESTRELLAS);throw new RangeError("Superadas estrellas a repartir");} 
           break;
         case this.DISTANCIA:
           if (this.juego.getJugador().getDistancia()>indice) this.juego.getJugador().setDistancia(indice);
           else if ((this.juego.getNivelJugador() + indice)<=Constantes.MAXIMAS_ESTRELLAS) this.juego.getJugador().setDistancia(indice);
           else{alert("El máximo de puntos a repartir es "  + Constantes.MAXIMAS_ESTRELLAS);throw new RangeError("Superadas estrellas a repartir");} 
           break;
         case this.MANA:
           if (this.juego.getJugador().getMana()>indice) this.juego.getJugador().setMana(indice);
           else if ((this.juego.getNivelJugador() + indice)<=Constantes.MAXIMAS_ESTRELLAS) this.juego.getJugador().setMana(indice);
           else{alert("El máximo de puntos a repartir es "  + Constantes.MAXIMAS_ESTRELLAS);throw new RangeError("Superadas estrellas a repartir");} 
           break;
         case this.RESISTENCIA:
           if (this.juego.getJugador().getResistencia()>indice) this.juego.getJugador().setResistencia(indice);
           else if ((this.juego.getNivelJugador() + indice)<=Constantes.MAXIMAS_ESTRELLAS) this.juego.getJugador().setResistencia(indice);
           else{alert("El máximo de puntos a repartir es "  + Constantes.MAXIMAS_ESTRELLAS);throw new RangeError("Superadas estrellas a repartir");} 
           break;
         case this.ALMA:
           if (this.juego.getJugador().getAlma()>indice) this.juego.getJugador().setAlma(indice);
           else if ((this.juego.getNivelJugador() + indice)<=Constantes.MAXIMAS_ESTRELLAS) this.juego.getJugador().setAlma(indice);
           else{alert("El máximo de puntos a repartir es "  + Constantes.MAXIMAS_ESTRELLAS);throw new RangeError("Superadas estrellas a repartir");} 
           break;
         case this.SUERTE:
           if (this.juego.getJugador().getSuerte()>indice) this.juego.getJugador().setSuerte(indice);
           else if ((this.juego.getNivelJugador() + indice)<=Constantes.MAXIMAS_ESTRELLAS) this.juego.getJugador().setSuerte(indice);
           else{alert("El máximo de puntos a repartir es "  + Constantes.MAXIMAS_ESTRELLAS);throw new RangeError("Superadas estrellas a repartir");} 
           break;
         case this.FUERZA:
           if (this.juego.getJugador().getFuerza()>indice) this.juego.getJugador().setFuerza(indice);
           else if ((this.juego.getNivelJugador() + indice)<=Constantes.MAXIMAS_ESTRELLAS) this.juego.getJugador().setFuerza(indice);
           else{alert("El máximo de puntos a repartir es "  + Constantes.MAXIMAS_ESTRELLAS);throw new RangeError("Superadas estrellas a repartir");} 
           break;
         case this.VIDA:
           if (this.juego.getJugador().getVida()>indice) this.juego.getJugador().setVida(indice);
           else if ((this.juego.getNivelJugador() + indice)<=Constantes.MAXIMAS_ESTRELLAS) this.juego.getJugador().setVida(indice);
           else{alert("El máximo de puntos a repartir es "  + Constantes.MAXIMAS_ESTRELLAS);throw new RangeError("Superadas estrellas a repartir");} 
           break;
         case this.DEFENSA:
           if (this.juego.getJugador().getDefensa()>indice) this.juego.getJugador().setDefensa(indice);
           else if ((this.juego.getNivelJugador() + indice)<=Constantes.MAXIMAS_ESTRELLAS) this.juego.getJugador().setDefensa(indice);
           else{alert("El máximo de puntos a repartir es "  + Constantes.MAXIMAS_ESTRELLAS);throw new RangeError("Superadas estrellas a repartir");} 
           break;                                                    
       }

       this.cantidad=indice;

      }
    }catch(e){
      if(e instanceof RangeError){
          console.log(e);
      }else{
        console.error(e);
      }
    }

  }

}