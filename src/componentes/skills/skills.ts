import { Component,Input } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: 'skills.html'
})
export class Skills {


  @Input("tipo") datoNumber: number;

  @Input() cantidad: string;

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

constructor() {
}

}