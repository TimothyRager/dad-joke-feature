import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Joke} from '../models/joke';
import {API_URL} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DadJokeService {

  private jokesUrl = API_URL + '/jokes';

  // private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
  }

  getJokeById(id: string): Observable<Joke> {
    return this.http.get<Joke>(this.jokesUrl + '/' + id);
  }

  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.jokesUrl);
  }

  getAllCachedJokes(): Observable<Joke[]> {

    return this.http.get<Joke[]>(this.jokesUrl + '/all');
  }

  getSearchResults(searchString: string): Observable<Joke[]> {

    return this.http.get<Joke[]>(this.jokesUrl + '/search=' + searchString);
  }


}
