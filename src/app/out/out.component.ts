import { Component } from '@angular/core';
import { OutAboutComponent } from './out-about/out-about.component';
import { OutPracticeComponent } from './out-practice/out-practice.component';
import { OutVersesComponent } from './out-verses/out-verses.component';

@Component({
  selector: 'page-out',
  templateUrl: 'out.component.html'
})
export class OutComponent {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    this.tab1Root = OutAboutComponent;
    this.tab2Root = OutVersesComponent;
    this.tab3Root = OutPracticeComponent;
  }
}
