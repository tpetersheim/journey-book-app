import { Component } from '@angular/core';
import { DataKey } from './../../core/data/models/data-key.type';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-up-about',
  templateUrl: 'up-about.component.html'
})
export class UpAboutComponent {
  
  dataKey: DataKey = 'up';

  constructor(private navCtrl: NavController) {}
}
