import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blogpost';
import { BlogPostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  blogPostList$: Observable<BlogPost[]>;

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit() {
    this.blogPostList$ = this.blogPostService.getBlogPosts();
  }

}
