import { Http, Response } from '@angular/http';

import { AboutModel } from './models/about.model';
import { DataKey } from './models/data-key.type';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PracticeModel } from './models/practice.model';
import { VerseModel } from './models/verse.model';
import { aboutData } from './data/about.data';
import { practiceData } from './data/practice.data';
import { verseData } from './data/verse.data';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getVerses(key: DataKey): Observable<VerseModel[]> {
    return Observable.of(verseData)
      .map((verses: VerseModel[]) => {
        return verses.filter((v) => v.key === key);
      })
      .catch(this.handleError);
  }

  getAbouts(key: DataKey): Observable<AboutModel[]> {
    return Observable.of(aboutData)
      .map((abouts: AboutModel[]) => {
        return abouts.filter((a) => a.key === key);
      })
      .catch(this.handleError);
  }

  getPractices(key: DataKey): Observable<PracticeModel[]> {
    return Observable.of(practiceData)
      .map((practices: PracticeModel[]) => {
        return practices.filter((p) => p.key === key);
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}