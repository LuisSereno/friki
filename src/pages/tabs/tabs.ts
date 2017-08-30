import { Component } from '@angular/core';

import { Qr } from '../qr/qr';
import { Nfc } from '../nfc/nfc';
import { FichaPersonaje } from '../personaje/ficha_personaje';
import { HistoriaPantalla } from '../historia/historia';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FichaPersonaje;
  tab2Root = Qr;
  tab3Root = Nfc;
  tab4Root = HistoriaPantalla;

  constructor() {

  }
}
