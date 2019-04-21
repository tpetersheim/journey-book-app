import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { DataKey } from '../../services/data/models/data-key.type';
import { DataService } from '../../services/data/data.service';
import { VerseModel } from '../../services/data/models/verse.model';


@Component({
  selector: 'verses-content',
  templateUrl: 'verses.component.html'
})
export class VersesComponent implements OnInit {
  @Input() dataKey: DataKey;
  verseItems: Array<{ title: string, content: SafeHtml, icon: string, showContent: boolean }> = [];
  private iconClosed = 'arrow-dropleft';
  private iconOpen = 'arrow-dropdown';

  constructor(private sanitizer: DomSanitizer, private dataService: DataService) {}

  ngOnInit() {
    this.loadVerses();
  }

  private loadVerses() {
    this.dataService.getVerses(this.dataKey).subscribe((verses: VerseModel[]) => {
      this.verseItems = [];
      for (const verse of verses) {
        this.addVerse(verse.title, verse.content);
      }
    }, (err) => {
      console.log(err);
      alert('Sorry, there was an error displaying Scriptures. Please try again or contact support.');
    });
  }

  private addVerse(title: string, content: string) {
    this.verseItems.push(this.buildVerse(title, content));
  }

  private buildVerse(title: string, content: string) {
    return {
      title: title,
      content: this.sanitizer.bypassSecurityTrustHtml(content),
      icon: this.iconClosed,
      showContent: false
    };
  }

  toggleContent(data) {
    if (data.showContent) {
      data.showContent = false;
      data.icon = this.iconClosed;
    } else {
      data.showContent = true;
      data.icon = this.iconOpen;
    }
  }

}
