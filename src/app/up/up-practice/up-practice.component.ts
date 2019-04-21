import { Component } from '@angular/core';
import { DataKey } from './../../services/data/models/data-key.type';

@Component({
  selector: 'page-up-practice',
  templateUrl: 'up-practice.component.html'
})
export class UpPracticeComponent {

  dataKey: DataKey = DataKey.up;

  constructor() {
  }
}
