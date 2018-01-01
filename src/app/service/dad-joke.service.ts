import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Joke} from '../models/joke';
import {API_URL} from '../../environments/environment';

declare let EventSource: any;

@Injectable()
export class DadJokeService {

  private jokesUrl = API_URL + '/jokes';

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
  }

  getJokeById(id: string): Joke {
    const returnJoke: Joke = new Joke;
    console.log(id);
    this.http.get<Joke>(this.jokesUrl + '/' + id).subscribe(jk => Object.assign(returnJoke, jk));
    return returnJoke;
  }

  getRandomJoke(): Joke {
    const returnJoke: Joke = new Joke;
    console.log('Random Joke');
    this.http.get<Joke>(this.jokesUrl).subscribe(jk => Object.assign(returnJoke, jk));
    return returnJoke;
  }

  getAllCachedJokes(): Joke[] {
    const returnJokeArray: Joke[] = [];
    console.log('Cached Jokes');
    this.http.get<Joke[]>(this.jokesUrl + '/all').subscribe(jka => Object.assign(returnJokeArray, jka));
    return returnJokeArray;
  }

}
