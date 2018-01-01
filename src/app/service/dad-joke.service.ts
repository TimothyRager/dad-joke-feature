import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Joke} from '../models/joke';
import {API_URL} from '../../environments/environment';
import {Observable} from "rxjs/Observable";

@Injectable()
export class DadJokeService {

  private jokesUrl = API_URL + '/jokes';

  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
  }

  getJokeById(id: string): Joke {

    const returnJoke: Joke = new Joke;
    console.log(id);
    this.http.get<Joke>(this.jokesUrl + '/' + id).subscribe(jk => Object.assign(returnJoke, jk));
    return returnJoke;
  }

  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.jokesUrl);
  }

  getAllCachedJokes(): Joke[] {

    const getJokes = this.http.get<Joke[]>(this.jokesUrl + '/all');
    const tempJokes: Joke[] = [];
    getJokes.subscribe(next => {
      for (const x of next) {
        const jokeHolder: Joke = new Joke(x);
        tempJokes.push(jokeHolder);
      }
    });
    return tempJokes;
  }


}
