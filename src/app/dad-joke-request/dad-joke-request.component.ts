import { Component, OnInit } from '@angular/core';
import {DadJokeService} from '../service/dad-joke.service';
import {Joke} from '../models/joke';

@Component({
  selector: 'app-dad-joke-request',
  templateUrl: './dad-joke-request.component.html',
  styleUrls: ['./dad-joke-request.component.css']
})
export class DadJokeRequestComponent implements OnInit {

    joke: Joke;

  constructor(private jokeService: DadJokeService) {
  }

  getRandom(): void {
    this.jokeService.getRandomJoke().subscribe(jk => {
      this.joke = new Joke (jk);
    });
  }

  getCached(): Joke[] {
    return this.jokeService.getAllCachedJokes();
  }

  ngOnInit() {
    this.jokeService.getRandomJoke()
      .subscribe(jk => {

        this.joke = new Joke (jk);
      });
  }
}
