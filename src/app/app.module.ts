import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookInformationComponent } from './book-information/book-information.component';
import {BookListService} from './book-list.service';
import {BookInfoService} from './book-info.service';
import { FooterComponent } from './footer/footer.component';
import { HighlightBoxHeaderDirective } from './highlight-box-header.directive';
import { MouseOverDirective } from './mouse-over.directive';
import { BackGruondHighlighterDirective } from './back-gruond-highlighter.directive';


@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BookInformationComponent,
    FooterComponent,
    HighlightBoxHeaderDirective,
    MouseOverDirective,
    BackGruondHighlighterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookListService,BookInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
