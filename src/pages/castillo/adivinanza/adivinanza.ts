import { Component,ViewChild  } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Historia } from '../../../servicios/beans/historia';
import { Adivinanza } from '../../../servicios/beans/adivinanza';
import { Juego } from '../../../servicios/juego';

@Component({
  selector: 'castillo-adivinanza',
  templateUrl: 'adivinanza.html'
})
export class CastilloAdivinanza {

  public firstParam:string|Adivinanza;

  from:string;

  to:string;

  mapping:{};

  constructor(public navCtrl: NavController,public navParams: NavParams, public juego:Juego) {
    this.firstParam = navParams.get("paramText");


    this.from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
    this.to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
    this.mapping = {};
     
    for(var i = 0, j = this.from.length; i < j; i++ )
        this.mapping[ this.from.charAt( i ) ] = this.to.charAt( i );


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPage');
  }

  public esAdivinanza():boolean{
    return (this.firstParam instanceof Adivinanza);
  }

  protected respuestaCorrecta(respuesta:string):boolean{

    if (this.esAdivinanza()){
      let respuestaTransformada=this.normalizar(respuesta.toUpperCase().replace(/[\s]/g, ''));
      let solucionTransformada=this.normalizar((<Adivinanza>this.firstParam).respuesta.toUpperCase().replace(/[\s]/g, ''));

      if (respuestaTransformada===solucionTransformada){
        return true;
      }else{
        return false;
      }
      

    }else{
      return false;
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

  
