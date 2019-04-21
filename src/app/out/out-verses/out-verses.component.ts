import { Component } from '@angular/core';
import { DataKey } from './../../services/data/models/data-key.type';

@Component({
  selector: 'page-out-verses',
  templateUrl: 'out-verses.component.html'
})
export class OutVersesComponent {

  dataKey: DataKey = 'out';

  constructor() {
  }
}
