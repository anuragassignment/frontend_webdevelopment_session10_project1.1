import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesService } from './services/movies.service';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from './directives/hover.directive';
import { StarDirective } from './directives/star.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    StarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
