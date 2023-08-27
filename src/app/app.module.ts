import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { SearchPipe } from './shared/pipe/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
  SearchPipe,
  
  
  ],
  imports: [
    BrowserModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
