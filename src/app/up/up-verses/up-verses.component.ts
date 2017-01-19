import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Component } from '@angular/core';
import { DataService } from './../../core/data.service/data.service';
import { NavController } from 'ionic-angular';
import { VerseModel } from './../../core/data.service/models/verse.model';

@Component({
  selector: 'page-up-verses',
  templateUrl: 'up-verses.component.html'
})
export class UpVersesComponent {

  verseItems: Array<{ title: string, details: SafeHtml, icon: string, showDetails: boolean }> = [];
  private iconClosed: string = 'arrow-dropleft';
  private iconOpen: string = 'arrow-dropdown';
  private dataKey: string = 'up';

  constructor(private navCtrl: NavController, private sanitizer: DomSanitizer, private dataService: DataService) {
    this.loadVerses();
  }

  private loadVerses() {
    this.dataService.getVerses(this.dataKey).subscribe((verses: VerseModel[]) => {
      this.verseItems = [];
      for (let verse of verses) {
        this.addVerse(verse.title, verse.content);
      }
      console.log(this.verseItems);
    }, (err) => {      
      console.log(err);
    });
  }

  private addVerse(title: string, content: string) {
    this.verseItems.push(this.buildVerse(title, content));
  }

  private buildVerse(title: string, content: string) {
    return {
      title: title,
      details: this.sanitizer.bypassSecurityTrustHtml(content),
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
