import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  endpoint: string = "https://testserver/vargazoltan06/movies";

  constructor(
    private http: HttpClient,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.endpoint}`);
  }

  deleteMovie(movies: Movie): Observable<Movie> {
    return this.http.delete<Movie>(`${this.endpoint}/${movies.id}`);
  }

}
