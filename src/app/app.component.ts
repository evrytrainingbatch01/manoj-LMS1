import { Component } from '@angular/core';
import {BookListService} from './book-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Library Management ';
  firstname="Manoj";
  lastname="kulakarni";
  booksList;
  date=new Date();
  time=new Date().toLocaleTimeString();
  constructor(private bookService:BookListService){ }

  ngOnInit(){
    this.booksList=this.bookService.showBookList();
  }

}
