import { Directive, ElementRef, HostListener } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'a[target=_blank]'
})
export class ExternalLinksDirective {
  private el: Element;

  constructor(
    private platform: Platform,
    private elementRef: ElementRef,
    private iab: InAppBrowser
    ) {
    this.el = elementRef.nativeElement;
  }

  @HostListener('click', ['$event.target'])
  onClick(el: Element) {
    this.platform.ready().then(() => {
      const url = el.getAttribute('href');
      this.iab.create(url, '_blank');
    });
    return false;
  }
}
