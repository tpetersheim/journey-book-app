import { Component } from '@angular/core';
import { DataKey } from './../../core/data/models/data-key.type';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-in-verses',
  templateUrl: 'in-verses.component.html'
})
export class InVersesComponent {

  dataKey: DataKey = 'in';

  constructor(private navCtrl: NavController) {
  }
}
