import { Component, OnInit ,Input,Output,EventEmitter,AfterViewInit} from '@angular/core';
import {BookInfoService} from '../book-info.service';

@Component({
  selector: 'app-book-information',
  templateUrl: './book-information.component.html',
  styleUrls: ['./book-information.component.css']
})
export class BookInformationComponent implements OnInit ,AfterViewInit{
  valueofbook;
  counter=0;
  @Input('selectedBook') selectedBook:String;
  @Input('selectedBookinfo') selectedBookinfo:Object;
  constructor(private bookinfoservice : BookInfoService) { }

  ngOnInit() { }

//child to parent data passing--------
ngAfterViewInit(){
this.valueofbook=this.selectedBookinfo;
}
// child to parent function call------
@Output() bookadded=new EventEmitter();
@Output() countbook=new EventEmitter();
addBook(){
    this.bookadded.emit(this.valueofbook);
}

}
