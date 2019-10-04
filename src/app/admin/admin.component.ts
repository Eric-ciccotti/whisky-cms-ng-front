import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../blogpost.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blogpost';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // blogPost$: Observable<BlogPost[]>;
  allBlogPosts: BlogPost[];

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit() {
    // this.blogPost$ = this.blogPostService.getBlogPosts();
    this.blogPostService
      .getBlogPosts()
      .subscribe(data => this.refresh(data));
  }

  onDeleteBlogPosts(selectedOptions) {
    const ids = selectedOptions.map(selectedOption => selectedOption.value); //je récupère que les 'values' , les id dans un tableau
    console.log(ids);

    if (ids.length === 1) {
      this.blogPostService
        .deleteSingleBlogPostById(ids[0])
        .subscribe(data => this.refresh(data), err => this.handleError(err));
    } else {
      this.blogPostService.deleteManyBlogPots(ids)
        .subscribe(data => this.refresh(data), err =>this.handleError(err));
    }
  }

  refresh(data) {
    console.log(data);
    this.blogPostService.getBlogPosts().subscribe(data => {
      this.allBlogPosts = data;
    });
  }
  //fonction qui rafraichi le template chaque fois que des données arrivent avec succès

  handleError(error) {
    console.log(error);

  }
}
