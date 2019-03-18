import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  constructor() { }

  showBookList(){

  let  booksList=["book1","book2","book3","book4"];
  return booksList;
  }
}
