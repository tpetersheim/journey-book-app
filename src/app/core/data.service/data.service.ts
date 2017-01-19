import * as _ from 'lodash';

import { Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { VerseModel } from './models/verse.model';

@Injectable()
export class DataService {
  
  constructor(private http: Http) { }

  getVerses(key: string): Observable<VerseModel[]> {
    return this.http.get('/assets/data/verses.json')
                    .map((res: Response) => {
                      let data = res.json();
                      return data != null ? _.filter(data.verses as VerseModel[], (v) => v.key === key) : [];
                    })
                    .catch (this.handleError);
  }

  private handleError (error: Response | any) {
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