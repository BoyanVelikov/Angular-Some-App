import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';


interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  };

interface Photos extends Array<Photo>{};

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnInit {
  photos: Photos[] = [];
  constructor(private photosService: PhotosService) { 
    
  }
  log() {
    return(this.photos);
  }

  ngOnInit(): void {
    this.photosService.getAllPhotos().subscribe(data => this.photos.push(data), err => console.log(`${JSON.stringify(err)}`));
  }

}
