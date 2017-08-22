import { Component,ViewChild  } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Historia } from '../../../servicios/beans/historia';
import { Adivinanza } from '../../../servicios/beans/adivinanza';
import { Juego } from '../../../servicios/juego';
import { Accion } from '../../../servicios/beans/accion';

@Component({
  selector: 'castillo-adivinanza',
  templateUrl: 'adivinanza.html'
})
export class CastilloAdivinanza {

  public firstParam:Accion;

  public secondParam:boolean;

  respuesta:string;

  from:string;

  to:string;

  mapping:{};

  constructor(public navCtrl: NavController,public navParams: NavParams, public juego:Juego) {
    this.firstParam = this.navParams.get("paramAccion");
    this.secondParam = this.navParams.get("paramText");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPage');
    if (this.secondParam){
      this.firstParam.estado=true;
    }
    this.respuesta="";
    this.from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
    this.to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
    this.mapping = {};
     
    for(var i = 0, j = this.from.length; i < j; i++ )
        this.mapping[ this.from.charAt( i ) ] = this.to.charAt( i );

  }

  protected respuestaCorrecta():void{

    if (!this.secondParam){
      let respuestaTransformada=this.normalizar(this.respuesta.toUpperCase().replace(/[\s]/g, ''));
      let solucionTransformada=this.normalizar(this.firstParam.adivinanza.respuesta.toUpperCase().replace(/[\s]/g, ''));

      if (respuestaTransformada===solucionTransformada){
        this.firstParam.estado=true;
        this.navCtrl.pop();
      }else{
        alert("LA RESPUESTA ES INCORRECTA");
      }
    }else{
      alert("LA RESPUESTA ES INCORRECTA");

    }

  }

   goBack() {
    console.log("popping");
    this.navCtrl.pop();
  }

  public normalizar(cadena:string):string{

    var ret = [];
    for( var i = 0, j = cadena.length; i < j; i++ ) {
        var c = cadena.charAt( i );
        if( this.mapping.hasOwnProperty( cadena.charAt( i ) ) )
            ret.push( this.mapping[ c ] );
        else
            ret.push( c );
    }      
    return ret.join( '' );

  }

}

  
