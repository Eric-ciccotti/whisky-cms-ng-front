import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../blogpost.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blogpost';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  blogPost$: Observable<BlogPost>;

  constructor(private blogPostService: BlogPostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id'); // :id
    this.blogPost$ = this.blogPostService.getBlogPostById(id);
  }

}
