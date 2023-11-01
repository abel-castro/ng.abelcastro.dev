import { Component } from '@angular/core';
import { BlogPostsService } from '../../services/blog-posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss']
})
export class BlogPostListComponent {
  posts: Post[] = [];

  constructor(private blogPostsService: BlogPostsService) {}

  ngOnInit(): void {
    this.blogPostsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
