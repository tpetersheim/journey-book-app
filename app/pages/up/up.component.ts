import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import { UpVersesComponent } from './up-verses/up-verses.component';
import { UpPracticeComponent } from './up-practice/up-practice.component';
import { UpToolsComponent } from './up-tools/up-tools.component';

@Component({
  templateUrl: 'build/pages/up/up.component.html'
})
export class UpComponent {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    this.tab1Root = UpVersesComponent;
    this.tab2Root = UpPracticeComponent;
    this.tab3Root = UpToolsComponent;
  }
}
