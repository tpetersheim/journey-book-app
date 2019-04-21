import { Directive, ElementRef, HostListener } from '@angular/core';

import { InAppBrowser } from 'ionic-native';
import { Platform } from 'ionic-angular';

@Directive({
  selector: 'a[target=_blank]'
})
export class ExternalLinksDirective {
  private el: Element;

  constructor(private platform: Platform, private elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
  }

  @HostListener('click', ['$event.target'])
  onClick(el: Element) {
    this.platform.ready().then(() => {
      const url = el.getAttribute('href');
      new InAppBrowser(url, '_blank');
    });
    return false;
  }
}
