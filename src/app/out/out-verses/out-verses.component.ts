import { Component } from '@angular/core';
import { DataKey } from './../../core/data/models/data-key.type';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-out-verses',
  templateUrl: 'out-verses.component.html'
})
export class OutVersesComponent {

  dataKey: DataKey = 'out';

  constructor(private navCtrl: NavController) {
  }
}
