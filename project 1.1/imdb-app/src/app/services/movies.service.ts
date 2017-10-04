// MoviesService which displays and add the movie list. Also returns and accept the properties
import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/movie.details';
@Injectable()
export class MoviesService {
  moviesLst: IMovie[] = [];

  setData(obj: IMovie) {
    this.moviesLst.push(obj);
  }

  getData() {
    return this.moviesLst;
  }
  constructor() { }

}
