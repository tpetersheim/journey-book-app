import { Component } from '@angular/core';
import { DataKey } from './../../core/data/models/data-key.type';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-out-about',
  templateUrl: 'out-about.component.html'
})
export class OutAboutComponent {
  
  dataKey: DataKey = 'out';

  constructor(private navCtrl: NavController) {}
}
