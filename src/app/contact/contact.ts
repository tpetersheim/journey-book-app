import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private clickCount = 0;

  constructor(private navCtrl: NavController) {
  }

  easterEgg() {
    this.clickCount++;

    if (this.clickCount >= 5) {
      alert(`Don't Stop Believin'!`);
      this.clickCount = 0;
    }

  }
}
