import { TestBed } from '@angular/core/testing';

import { BlogPostsService } from '../app/services/blog-posts.service';

describe('BlogPostService', () => {
  let service: BlogPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
