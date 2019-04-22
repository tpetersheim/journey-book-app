import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  private clickCount = 0;


  easterEgg() {
    this.clickCount++;

    if (this.clickCount >= 5) {
      alert(`Don't Stop Believin'!`);
      this.clickCount = 0;
    }

  }
}
