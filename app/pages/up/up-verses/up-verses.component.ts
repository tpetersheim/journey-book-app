import {Component} from '@angular/core';
import {DomSanitizationService, SafeHtml} from '@angular/platform-browser';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/up/up-verses/up-verses.component.html'
})
export class UpVersesComponent {

  data: Array<{ title: string, details: SafeHtml, icon: string, showDetails: boolean }> = [];
  private iconClosed: string = 'arrow-dropleft-circle';
  private iconOpen: string = 'arrow-dropdown-circle';

  constructor(private navCtrl: NavController, private sanitizer: DomSanitizationService) {
    this.buildVersesData();
  }

  private buildVersesData() {
    this.data = [];
    this.data.push(this.buildVerse(
      'Book 4:4-6',
      `
    <p>
      4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula mollis quam, nec fringilla nibh lacinia eu. 5
      Phasellus ullamcorper bibendum sagittis. Duis viverra lacus elit, ac varius urna mollis a. In pulvinar pretium mi.
      Donec in nibh vulpuate, bibendum sapien quis, scelerisque tortor.
    </p>
    <p>
      6 Aliquam venenatis nulla nec commodo semper. Nulla eu euismod risus. Nullam interdum bibendum tristique. Nam fringilla ut
      diam ut fermentum.
    </p>`));

    this.data.push(this.buildVerse(
      'Book 8:10-12',
      `
      <p>
      10 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula mollis quam, nec fringilla nibh lacinia eu. 11
      Phasellus ullamcorper bibendum sagittis. Duis viverra lacus elit, ac varius urna mollis a. In pulvinar pretium mi.
      Donec in nibh vulputate, bibendum sapien quis, scelerisque tortor.
    </p>
    <p>
      12 Aliquam venenatis nulla nec commodo semper. Nulla eu euismod risus. Nullam interdum bibendum tristique. Nam fringilla
      ut diam ut fermentum.
    </p>
      `));
  }

  private buildVerse(title: string, details: string) {
    return {
        title: title,
        details: this.sanitizer.bypassSecurityTrustHtml(details),
        icon: this.iconClosed,
        showDetails: false
      };
  }



  toggleDetails(data) {
    if (data.showDetails) {
      data.showDetails = false;
      data.icon = this.iconClosed;
    } else {
      data.showDetails = true;
      data.icon = this.iconOpen;
    }
  }
}
