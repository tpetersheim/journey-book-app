import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { AboutModel } from '../../../services/data/models/about.model';
import { DataKey } from '../../../services/data/models/data-key.type';
import { DataService } from '../../../services/data/data.service';

@Component({
  selector: 'about-content',
  templateUrl: 'about.component.html'
})
export class AboutComponent implements OnInit {
  @Input() dataKey: DataKey;
  content: SafeHtml;

  constructor(private sanitizer: DomSanitizer, private dataService: DataService) {}

  ngOnInit() {
    this.loadAbout();
  }

  private loadAbout() {
    this.dataService.getAbouts(this.dataKey).subscribe((abouts: AboutModel[]) => {
      if (abouts.length > 0) {
        this.content = this.sanitizer.bypassSecurityTrustHtml(abouts[0].content);
      }
    }, (err) => {
      console.log(err);
      alert('Sorry, there was an error displaying About. Please try again or contact support.');
    });
  }

}
