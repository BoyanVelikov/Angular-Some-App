import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

class Books {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

@Component({
  selector: 'app-first-one',
  templateUrl: './first-one.component.html',
  styleUrls: ['./first-one.component.css']
})
export class FirstOneComponent implements OnInit {
  books: Books[];
  showContent: boolean = false;
  buttonTitle: string = "Show Content";

  constructor() {
    this.books = [{
      title: 'It',
      price: 20
    },
    {
      title: 'Under the Dome',
      price: 25
    }
    ]
  }


  toggleContent(event: object) {

    this.showContent = !this.showContent;
    if (this.buttonTitle == 'Show Content') {
      this.buttonTitle = 'Hide Content';
    } else {
      this.buttonTitle = 'Show Content';
    }

  }

  ngOnInit(): void {

  }

}
