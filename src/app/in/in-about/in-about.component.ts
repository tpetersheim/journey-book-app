import { Component } from '@angular/core';
import { DataKey } from '../../services/data/models/data-key.type';

@Component({
  selector: 'page-in-about',
  templateUrl: 'in-about.component.html'
})
export class InAboutComponent {

  dataKey: DataKey = DataKey.in;

  constructor() {}
}
