import { Component } from '@angular/core';
import { DataKey } from './../../services/data/models/data-key.type';

@Component({
  selector: 'page-up-verses',
  templateUrl: 'up-verses.component.html'
})
export class UpVersesComponent {

  dataKey: DataKey = DataKey.up;

  constructor() {
  }
}
