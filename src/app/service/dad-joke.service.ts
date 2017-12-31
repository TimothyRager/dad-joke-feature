import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Joke} from '../models/joke';

declare let EventSource: any;

@Injectable()
export class DadJokeService {

  private jokesUrl = API_URL + '/jokes';

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  // Probably not necessary. Retrieve joke and post as message would work better.
  jokeSource = new BehaviorSubject<Joke>(new Joke({
    jokeId: '-0',
    jokeText: 'InitialJoke',
    status: 0
  }));
  currentJoke = this.jokeSource.asObservable();

  constructor(private http: HttpClient) {
  }

  getJokeById(id: string): Joke {
    const returnJoke: Joke = new Joke;
    console.log(id);
    this.http.get<Joke>(this.jokesUrl + '/j/' + id).subscribe(jk => Object.assign(returnJoke, jk));
    return returnJoke;
  }

  getRandomJoke(): Joke {
    const returnJoke: Joke = new Joke;
    console.log('Random Joke');
    this.http.get<Joke>(this.jokesUrl).subscribe(jk => Object.assign(returnJoke, jk));
    return returnJoke;
  }

}
