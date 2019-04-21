import { Component } from '@angular/core';
import { DataKey } from '../../services/data/models/data-key.type';

@Component({
  selector: 'page-in-practice',
  templateUrl: 'in-practice.component.html'
})
export class InPracticeComponent {

  dataKey: DataKey = DataKey.in;

  constructor() {
  }
}
