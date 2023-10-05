import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { POST_SAMPLE_DATA } from './posts-sample-data';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {
  private apiUrl = 'https://abelcastro.dev/api/posts/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    if (environment.production) {
      return this.http.get<any[]>(this.apiUrl); 
    } else {
      return of(POST_SAMPLE_DATA);
    }

  }
}