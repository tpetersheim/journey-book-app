import { Component } from '@angular/core';
import { DataKey } from '../../services/data/models/data-key.type';

@Component({
  selector: 'page-in-verses',
  templateUrl: 'in-verses.component.html'
})
export class InVersesComponent {

  dataKey: DataKey = DataKey.in;

  constructor() {
  }
}
