import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LEAGUES_SAMPLE_DATA } from '../leagues-sample-data';
import { League } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class LeaguesService {
  private apiUrl = 'https://abelcastro.dev/api/sports/standings/';

  constructor(private http: HttpClient) {}

  getLeagues(): Observable<League[]> {
    if (isDevMode()) {
      return of(LEAGUES_SAMPLE_DATA);
    } else {
      return this.http.get<League[]>(this.apiUrl);
    }
  }
}
