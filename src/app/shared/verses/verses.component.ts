import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { DataService } from './../../core/data.service/data.service';
import { VerseModel } from './../../core/data.service/models/verse.model';

@Component({
  selector: 'verses-list',
  templateUrl: 'verses.component.html'
})
export class VersesComponent implements OnInit {
  @Input() dataKey: string;
  verseItems: Array<{ title: string, details: SafeHtml, icon: string, showDetails: boolean }> = [];
  private iconClosed: string = 'arrow-dropleft';
  private iconOpen: string = 'arrow-dropdown';

  constructor(private sanitizer: DomSanitizer, private dataService: DataService) { }

  ngOnInit() {
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
