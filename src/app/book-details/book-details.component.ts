import { Component, OnInit ,Input,ViewChild,AfterViewInit} from '@angular/core';
import {BookListService} from '../book-list.service';
import {BookInfoService} from '../book-info.service';
import {BookInformationComponent} from '../book-information/book-information.component'

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private bookService:BookListService,private bookinfoservice:BookInfoService ){ }
  booksList;
  bookinfoObject;
  selectedBook;
  selectedBookinfo;
  price;
  bookadded123;
  bookprasent=false;
  @Input('firstname') firstname:string;
  @Input('lastname') lastname:string;
  ngOnInit() {
    this.booksList=this.bookService.showBookList();
    this.bookinfoObject=this.bookinfoservice.getBookInfo();
  }
 
  ChangingValue(event){
    this.selectedBook=event.target.value;
   this.bookinfoObject.forEach(book => {
    if(book.bookName===this.selectedBook){
      this.selectedBookinfo=book;
    }
  });
  }

  //child to parent data binding -----------

  @ViewChild(BookInformationComponent) childcomp;
  ngAfterViewInit(){
    this.price=this.childcomp.valueofbook;
  }
  //chile to parent function calling 
  displayAddedBook(event){
  this.bookadded123=event.bookName;
  this.bookprasent=true;
  }
}
