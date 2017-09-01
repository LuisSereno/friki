import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Accion } from '../../servicios/beans/accion';
import { Historia } from '../../servicios/beans/historia';
import { Juego } from '../../servicios/juego';
import { CastilloListado } from '../castillo/listado/listado';
import { FichaPersonaje } from '../personaje/ficha_personaje';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-about',
  templateUrl: 'qr.html'
})
export class Qr {

  esEdicion_icono:string;

  constructor(public navCtrl: NavController,private qrScanner: QRScanner, public juego:Juego,private vibro:Vibration) {
 // constructor(public navCtrl: NavController, public juego:Juego) {
  	this.esEdicion_icono="";
  }

	  ionViewWillEnter(){

	  		this.prepararCamara();
	  	
		  	 /*this.juego.configurarJuego(JSON.parse(`{
														"nivelFinal": 1,
														"titulo": "Historia de escocia"
													}`));
		  	 this.bloquearUsuario();*/

/*		  	 this.juego.setHistoria(Historia.fromJSON(`{
														"orden": 1,
														"titulo": "la increible historia de sancho panza",
														"presentacion": [{
															"tipo": 1,
															"url": "http://www.cysluisfelipesereno.es"
														},
														{
															"tipo": 2,
															"texto": "Este es el texto mas bonito que has visto en la vida"
														}],
														"nudo": [{
															"tipo": 3,
															"adivinanza": {
																"pregunta": "¿Que tiene el rey en la panza?",
																"respuesta": "El buyuyu"
															}
														}],
														"desenlace": [{
															"tipo": 4,
															"enemigo": {
																"vida": 4,
																"fuerza": 2,
																"resistencia": 3,
																"defensa": 2,
																"suerte": 1
															}
														}]
													}`));
		  	 this.juego.guardarJuego();
		  	 this.navCtrl.push(CastilloListado);*/
		  	
		  	  	// Optionally request the permission early

	  	
	}

	private prepararCamara(){
		this.qrScanner.prepare()
		  .then((status: QRScannerStatus) => {
		     if (status.authorized) {
		       // camera permission was granted
				this.qrScanner.show().then(data => {
					console.log(data);
	 				// start scanning
	 				this.ejecutarCamara();
				},err => console.log(err));
		       // wait for user to scan something, then the observable callback will be called
		     } else if (status.denied) {
		     	alert("Asigna permisos a la camara");
		     	this.qrScanner.openSettings();
		       // camera permission was permanently denied
		       // you must use QRScanner.openSettings() method to guide the user to the settings page
		       // then they can grant the permission from there
		     } else {
		     	alert("Sin permisos no puedes jugar");
		       // permission was denied, but not permanently. You can ask for permission again at a later time.
		     }
		  })
		  .catch((e: any) => console.log('Error is', e));
	}


	private ejecutarCamara(){
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
       		this.vibro.vibrate(1000);
            console.log('Scanned something', text);
            text=text.split("&#34;").join('"');
     		if (!this.juego.getJugadorBloqueado()){
				let esConfiguracion:boolean=this.juego.configurarJuego(JSON.parse(text));
				if (!esConfiguracion){
					alert("No es un QR de configuracion");
					this.ejecutarCamara();
				}else{
					this.bloquearUsuario();
				}
		  	}else{
		         this.juego.setHistoria(Historia.fromJSON(text));
		         this.qrScanner.hide(); // hide camera preview
		         this.navCtrl.push(CastilloListado);
		  	}		
		  	scanSub.unsubscribe(); // stop scanning		
		  	this.prepararCamara();	         
       });
	}


	protected bloquearUsuario(){

		if (this.juego.getJugadorBloqueado()){
			this.esEdicion_icono="lock";
			this.juego.setJugadorBloqueado(true);
		}else{
			this.navCtrl.setRoot(FichaPersonaje);
			alert("Configura tu personaje para jugar");
		}
	}

}