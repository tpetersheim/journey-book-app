import { Component } from '@angular/core';
import { DataKey } from './../../services/data/models/data-key.type';

@Component({
    selector: 'page-out-about',
    templateUrl: 'out-about.component.html'
})
export class OutAboutComponent {
    dataKey: DataKey = DataKey.out;

    constructor() {}
}
