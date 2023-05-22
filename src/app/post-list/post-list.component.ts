import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  animations: [
    trigger('postAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
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

