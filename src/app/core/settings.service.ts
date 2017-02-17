import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SettingsService {

  private fontSizeKey = "fontIndex";
  private defaultFontIndex = 3;
  private fontIndexCache = new ReplaySubject<number>(1);
  private fontIndexStream = new Subject();

  constructor(private storage: Storage) {
    this.fontIndexStream.subscribe(this.fontIndexCache);
    this.getFontIndex().subscribe(fontIndex => this.fontIndexStream.next(fontIndex));
  }

  get fontIndex(): Observable<number> {
    return this.fontIndexCache;
  }

  getFontIndex(): Observable<number> {
    return Observable.fromPromise(this.storage.get(this.fontSizeKey)).map(fontSize => {
      return fontSize || this.defaultFontIndex;
    });
  }

  setFontIndex(fontIndex: number): Observable<any> {
    this.fontIndexStream.next(fontIndex);
    return Observable.fromPromise(this.storage.set(this.fontSizeKey, fontIndex));
  }
}