import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://apiblog-8w5f.onrender.com/api/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getPostById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
