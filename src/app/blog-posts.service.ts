import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { POST_SAMPLE_DATA } from './posts-sample-data';


@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {
  private apiUrl = 'https://abelcastro.dev/api/posts/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    if (isDevMode()){
      return of(POST_SAMPLE_DATA);
    }else {
      return this.http.get<any[]>(this.apiUrl); 
    }
  }
}