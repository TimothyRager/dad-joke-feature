import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Joke} from '../models/joke';
import {API_URL} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DadJokeService {

  private jokesUrl = API_URL + '/jokes';
  joke: Joke;
  jokes: Joke[];

  constructor(private http: HttpClient) {
  }

  getJokeById(id: string): Observable<Joke> {
    return this.http.get<Joke>(this.jokesUrl + '/' + id);
  }

  getJoke(id?: string): Joke {
    if (id === undefined) {
      this.assignRandomJoke();
    } else {
      this.assignJokeById(id);
    }
    return this.joke;
  }

  getJokesArray(term?: string): Joke[] {
    if (term === undefined) {
      this.assignAllCachedJokes();
    } else {
      this.assignSearchResults(term);
    }
    return this.jokes;
  }

  assignJokeById(id: string): void {
    this.http.get<Joke>(this.jokesUrl + '/' + id).subscribe(jk => this.joke = new Joke(jk));
  }

  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.jokesUrl);
  }

  assignRandomJoke(): void {
    this.http.get<Joke>(this.jokesUrl).subscribe(jk => this.joke = new Joke(jk));
  }
  assignAllCachedJokes(): void {

    this.http.get<Joke[]>(this.jokesUrl + '/all')
      .subscribe(next => {
        const temp: Joke[] = [];
        for (const x of next) {
          const jokeHolder: Joke = new Joke(x);
          temp.push(jokeHolder);
        }
        this.jokes = temp;
      });
  }

  assignSearchResults(searchString: string): void {

    this.http.get<Joke[]>(this.jokesUrl + '/search=' + searchString)
      .subscribe(next => {
        const temp: Joke[] = [];
        for (const x of next) {
          const jokeHolder: Joke = new Joke(x);
          temp.push(jokeHolder);
        }
        this.jokes = temp;
      });
  }


}
