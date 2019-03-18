import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookInfoService {

  constructor() { }

  public books:Array<Object> = [
    {id: 1, bookName: 'book1',bookAuthor:'manoj',bookPrice:100},
    {id: 2, bookName: 'book2',bookAuthor:'raja',bookPrice:200},
    {id: 3, bookName: 'book3',bookAuthor:'sahoo',bookPrice:300},
    {id: 4, bookName: 'book4',bookAuthor:'neeraj',bookPrice:400},
];
getBookInfo(){
  return this.books;
}
}
