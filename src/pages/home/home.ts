import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgendaPage } from '../agenda/agenda';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  agenda() {
    this.navCtrl.push('AgendaPage');
  }

  about() {
    this.navCtrl.push('AboutPage');
  }

  location() {
    this.navCtrl.push('LoctationPage');
  }

  contact() {
    this.navCtrl.push('ContactsPage');
  }

  guest() {
    this.navCtrl.push('GuestsPage');
  }

  schedule() {
    this.navCtrl.push('SchedulePage');
  }
}
