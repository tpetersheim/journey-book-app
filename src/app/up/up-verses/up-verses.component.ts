import { Component } from '@angular/core';
import { DataKey } from './../../core/data/models/data-key.type';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-up-verses',
  templateUrl: 'up-verses.component.html'
})
export class UpVersesComponent {

  dataKey: DataKey = 'up';

  constructor(private navCtrl: NavController) {
  }
}
