import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


import { aboutData } from './about.data';
import { practiceData } from './practice.data';
import { verseData } from './verse.data';
import { DataKey } from './models/data-key.type';
import { VerseModel } from './models/verse.model';
import { AboutModel } from './models/about.model';
import { PracticeModel } from './models/practice.model';

@Injectable()
export class DataService {

  constructor() { }

  getVerses(key: DataKey): Observable<VerseModel[]> {
    return of(verseData)
    .pipe(map((verses: VerseModel[]) => verses.filter(x => x.key === key)))
    .pipe(catchError(this.handleError));
  }

  getAbouts(key: DataKey): Observable<AboutModel[]> {
    return of(aboutData)
      .pipe(map((abouts: AboutModel[]) => abouts.filter((a) => a.key === key)))
      .pipe(catchError(this.handleError));
  }

  getPractices(key: DataKey): Observable<PracticeModel[]> {
    return of(practiceData)
      .pipe(map((practices: PracticeModel[]) => practices.filter((p) => p.key === key)))
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    console.log(error);
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return throwError(errMsg);
  }
}
