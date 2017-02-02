import { Component } from '@angular/core';
import { UpAboutComponent } from './up-about/up-about.component';
import { UpPracticeComponent } from './up-practice/up-practice.component';
import { UpVersesComponent } from './up-verses/up-verses.component';

@Component({
  selector: 'page-up',
  templateUrl: 'up.component.html'
})
export class UpComponent {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    this.tab1Root = UpAboutComponent;
    this.tab2Root = UpVersesComponent;
    this.tab3Root = UpPracticeComponent;
  }
}
