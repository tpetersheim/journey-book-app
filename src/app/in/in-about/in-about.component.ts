import { Component } from '@angular/core';
import { DataKey } from './../../core/data/models/data-key.type';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-in-about',
  templateUrl: 'in-about.component.html'
})
export class InAboutComponent {
  
  dataKey: DataKey = 'in';

  constructor(private navCtrl: NavController) {}
}
