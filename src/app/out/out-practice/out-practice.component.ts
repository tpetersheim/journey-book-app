import { Component } from '@angular/core';
import { DataKey } from './../../services/data/models/data-key.type';

@Component({
  selector: 'page-out-practice',
  templateUrl: 'out-practice.component.html'
})
export class OutPracticeComponent {

  dataKey: DataKey = DataKey.out;

  constructor() {
  }
}
