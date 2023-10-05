import { Component } from '@angular/core';
import { BlogPostsService } from '../blog-posts.service';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss']
})
export class BlogPostListComponent {
  posts: any[] = [];

  constructor(private blogPostsService: BlogPostsService) {}

  ngOnInit(): void {
    this.blogPostsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
