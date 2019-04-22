import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { DataService } from './../../services/data/data.service';
import { DataKey } from './../../services/data/models/data-key.type';
import { PracticeModel } from './../../services/data/models/practice.model';

@Component({
  selector: 'practice-content',
  templateUrl: 'practice.component.html',
  styleUrls: ['practice.component.scss']
})
export class PracticeComponent implements OnInit {
  @Input() dataKey: DataKey;
  practiceItems: Array<{ title: string, id: string, what: SafeHtml, how: SafeHtml }> = [];
  currentUrl: string;

  constructor(
    private sanitizer: DomSanitizer,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPractices();
    this.currentUrl = this.router.url;
  }

  private loadPractices() {
    this.dataService.getPractices(this.dataKey).subscribe((practices: PracticeModel[]) => {
      this.practiceItems = [];
      for (const p of practices) {
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
