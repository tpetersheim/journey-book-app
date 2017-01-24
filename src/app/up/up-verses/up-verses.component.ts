import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-up-verses',
  templateUrl: 'up-verses.component.html'
})
export class UpVersesComponent {

  dataKey: string = 'up';

  constructor(private navCtrl: NavController) {
  }
}
