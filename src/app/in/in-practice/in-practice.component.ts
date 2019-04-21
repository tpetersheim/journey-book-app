import { Component } from '@angular/core';
import { DataKey } from './../../core/data/models/data-key.type';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-in-practice',
  templateUrl: 'in-practice.component.html'
})
export class InPracticeComponent {

  dataKey: DataKey = 'in';

  constructor(private navCtrl: NavController) {
  }
}
