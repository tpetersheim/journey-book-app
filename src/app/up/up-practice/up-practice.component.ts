import { Component } from '@angular/core';
import { DataKey } from './../../core/data/models/data-key.type';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-up-practice',
  templateUrl: 'up-practice.component.html'
})
export class UpPracticeComponent {

  dataKey: DataKey = 'up';

  constructor(private navCtrl: NavController) {
  }
}
