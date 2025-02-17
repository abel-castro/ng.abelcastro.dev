import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { POST_SAMPLE_DATA } from '../posts-sample-data';
import { PostsAPIResponse } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class BlogPostsService {
  private apiUrl = 'https://core.abelcastro.dev/api/posts/?page_size=100';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostsAPIResponse> {
    if (isDevMode()) {
      return of(POST_SAMPLE_DATA);
    } else {
      return this.http.get<PostsAPIResponse>(this.apiUrl);
    }
  }
}
