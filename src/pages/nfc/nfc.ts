import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';

@Component({
  selector: 'page-contact',
  templateUrl: 'nfc.html'
})
export class Nfc {

	isEnabled:boolean;
	infotxt:string;

  constructor(public navCtrl: NavController, private nfc: NFC, private ndef: Ndef) {
  	this.metodoPrueba(); 
  }

	ionViewDidEnter(){
	    this.isEnabled=false;
	    
	    if (this.nfc.enabled()) {
	      this.infotxt="NFC enabled";
	    } else {
	    	this.nfc.showSettings();
	      this.infotxt='NFC disabled';
	    }
	}

  ngOnInit(){
	/*  	var message = [
    this.ndef.textRecord("hello, world"),
    this.ndef.uriRecord("http://github.com/chariotsolutions/phonegap-nfc")
	];


	this.nfc.write(message).then(data => {
					console.log(data)
	 				// start scanning
		}).catch((e: any) => console.log('Error is', e)); */
		
  }


  metodoPrueba(){
        this.nfc.addNdefListener().subscribe(data => {
            if (data && data.tag && data.tag.id) {      
                if (data.tag.ndefMessage) {
               /*     let toast = this.toastCtrl.create({
                        message: 'NFC Tag found',
                        duration: 1000,
                        position: 'bottom'
                    });

                    toast.present();
*/
					alert('NFC Tag found');
                    let payload = data.tag.ndefMessage[0].payload;
                    let tagContent = this.nfc.bytesToString(payload).substring(3);
                    console.log(tagContent);
                    
                } else {
                  /*  let toast = this.toastCtrl.create({
                        message: 'NFC Tag not found',
                        duration: 1000,
                        position: 'bottom'
                    });

                    toast.present();
				*/
					alert('NFC Tag not found');
                }
            }
        });
  }


  addNfcListeners():void {
  	console.log("aqui que pasa");
        this.nfc.addTagDiscoveredListener((tagEvent:Event) => this.tagListenerSuccess(tagEvent));
        console.log("aqui que pasa2");
        this.nfc.addNdefListener((tagEvent:Event) => this.tagListenerSuccess(tagEvent));
        console.log("aqui que pasa3");
    }
  tagListenerSuccess(tagEvent:Event) {
  	console.log("aqui que pasa4")
       console.log(tagEvent);
   }

}
