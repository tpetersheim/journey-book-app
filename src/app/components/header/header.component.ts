import { Component, Input, OnInit } from '@angular/core';
import { DataKey } from '../../services/data/models/data-key.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() {}

  @Input() title: string;
  @Input() key: DataKey;

  ngOnInit() {}

}
