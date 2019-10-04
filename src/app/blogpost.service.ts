import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from './models/blogpost';

@Injectable({ providedIn: 'root' })
export class BlogPostService {
  baseUrl = 'http://localhost:3000/api/v1/';

  constructor(private httpClient: HttpClient) {}

  getBlogPosts(): Observable<BlogPost[]> {
    return this.httpClient.get<BlogPost[]>(`${this.baseUrl}/blog-posts`);
  }

  getBlogPostById(id: string): Observable<BlogPost> {
    return this.httpClient.get<BlogPost>(`${this.baseUrl}/blog-posts/${id}`);
  }

  deleteSingleBlogPostById(id: string) {
    return this.httpClient.delete(`${this.baseUrl}/blog-posts/${id}`);
  }

  deleteManyBlogPots(ids: string[]) {
    const AllIds = ids.join(','); // 'a1a1,b1b1,c1c1'

    return this.httpClient.delete(`${this.baseUrl}/blog-posts/?ids=${AllIds}`)
    // http://localhost:3000/api/v1/blog-pots/ids?=a1a1,b1b1,c1c1...


  }
}
