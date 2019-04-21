import { Component } from '@angular/core';
import { DataKey } from './../../services/data/models/data-key.type';

@Component({
    selector: 'page-up-about',
    templateUrl: 'up-about.component.html'
})
export class UpAboutComponent {
    dataKey: DataKey = 'up';

    constructor() {}
}
