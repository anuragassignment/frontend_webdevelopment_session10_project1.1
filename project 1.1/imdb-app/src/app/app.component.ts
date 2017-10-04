import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { IMovie } from './interfaces/movie.details';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') movieForm: NgForm;
  moviesArr: any = [];
  moviesObj: IMovie = {
    images: '',
    name: '',
    description: '',
    rating: null,
    releaseDate: '',
    ratingArr: []
  };
  constructor(private movieData: MoviesService) {

  }

  onSubmit() {
    this.moviesObj.images = this.movieForm.value.moviePoster;
    this.moviesObj.name = this.movieForm.value.movieName;
    // if the description is not provided the value of description is set to string N/A
    if (this.movieForm.value.movieDescription === '' || this.movieForm.value.movieDescription === null) {
      this.moviesObj.description = 'N/A';
    } else {
      this.moviesObj.description = this.movieForm.value.movieDescription;
    };
    this.moviesObj.rating = this.movieForm.value.rating;
    this.moviesObj.ratingArr = Array(this.moviesObj.rating).fill(1);
    this.moviesObj.releaseDate = this.movieForm.value.releaseDate;
    this.movieData.setData({ ...this.moviesObj });
    // consumes the data from MovieServices
    this.moviesArr = this.movieData.getData();
    console.log(this.movieForm);
    console.log(this.moviesObj.ratingArr);
    this.movieForm.reset();
  }

  reset() {
    this.movieForm.reset();
  }
  ngOnInit() {
    // this.movieData.moviesLst = this.moviesArr;
    console.log(this.moviesArr);
  }
}
