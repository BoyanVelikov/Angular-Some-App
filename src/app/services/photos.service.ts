import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Photo {
albumId: number;
id: number;
title: string;
url: string;
thumbnailUrl: string;
};


@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient) { }

  getAllPhotos() : Observable<Photo[]> {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get<Photo[]>(url);
  }
}
