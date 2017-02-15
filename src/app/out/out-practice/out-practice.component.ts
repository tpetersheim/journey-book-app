import { Component } from '@angular/core';
import { DataKey } from './../../core/data/models/data-key.type';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-out-practice',
  templateUrl: 'out-practice.component.html'
})
export class OutPracticeComponent {

  dataKey: DataKey = 'out';

  constructor(private navCtrl: NavController) {
  }
}
