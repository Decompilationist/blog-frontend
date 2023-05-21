import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('id') ?? ''; // Definindo uma string vazia como valor padrão
      this.blogService.getPostById(postId).subscribe(post => {
        this.post = post;
        console.log(this.post); // verificar se os dados do post são exibidos de forma correta no console
      });
    });
    
  }
  goBack(): void {
    this.router.navigate(['/']);
  }
}

