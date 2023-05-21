import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private blogService: BlogService, private router: Router) {}

  navigateToPost(postId: string): void {
  this.router.navigate(['/posts', postId]);
  }

  toggleDescription(post: any): void {
    post.showDescription = !post.showDescription;
  }  

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((data: any) => {
      this.posts = data.docs;
    });
  }
}

