import { Component } from '@angular/core';
import { InAboutComponent } from './in-about/in-about.component';
import { InPracticeComponent } from './in-practice/in-practice.component';
import { InVersesComponent } from './in-verses/in-verses.component';

@Component({
  selector: 'page-in',
  templateUrl: 'in.component.html'
})
export class InComponent {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    this.tab1Root = InAboutComponent;
    this.tab2Root = InVersesComponent;
    this.tab3Root = InPracticeComponent;
  }
}
