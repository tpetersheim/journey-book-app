import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { DataKey } from './../../core/data/models/data-key.type';
import { DataService } from './../../core/data/data.service';
import { PracticeModel } from './../../core/data/models/practice.model';

@Component({
  selector: 'practice-content',
  templateUrl: 'practice.component.html'
})
export class PracticeComponent implements OnInit {
  @Input() dataKey: DataKey;
  practiceItems: Array<{ title: string, id: string, what: SafeHtml, how: SafeHtml }> = [];

  constructor(private sanitizer: DomSanitizer, private dataService: DataService) {}

  ngOnInit() {
    this.loadPractices();
  }

  private loadPractices() {
    this.dataService.getPractices(this.dataKey).subscribe((practices: PracticeModel[]) => {
      this.practiceItems = [];
      for (let p of practices) {
        this.addPractice(p.title, p.what, p.how);
      }
    }, (err) => {
      console.log(err);
      alert('Sorry, there was an error displaying Practice. Please try again or contact support.');
    });
  }

  private addPractice(title: string, what: string, how: string) {
    const id = title.replace(/ /g, '');
    this.practiceItems.push(this.buildPractice(title, id, what, how));
  }

  private buildPractice(title: string, id: string, what: string, how: string) {
    return {
      title: title,
      id: id,
      what: this.sanitizer.bypassSecurityTrustHtml(what),
      how: this.sanitizer.bypassSecurityTrustHtml(how)
    };
  }

}
