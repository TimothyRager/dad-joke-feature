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
  jokes: Joke[];
  displaySingle: boolean;
  arrDisp: HTMLElement;
  singDisp: HTMLElement;

  constructor(private jokeService: DadJokeService) {
    this.displaySingle = true;
  }

  getRandom(): void {
    if (!this.displaySingle) {
      this.displaySingle = true;
    }
    this.jokeService.getRandomJoke().subscribe(jk => {
      this.joke = new Joke (jk);
    });
  }

  getById(id: string): void {
    if (!this.displaySingle) {
      this.displaySingle = true;
    }
    this.jokeService.getJokeById(id).subscribe(jk => {
      this.joke = new Joke (jk);
    });
  }

  getCached(): void {
    if (this.displaySingle) {
      this.displaySingle = false;
    }
    this.jokeService.getAllCachedJokes()
      .subscribe(next => {
        const temp: Joke[] = [];
        for (const x of next) {
          const jokeHolder: Joke = new Joke(x);
          temp.push(jokeHolder);
        }
        this.jokes = temp;
      });
  }

  ngOnInit() {

    this.jokeService.getRandomJoke()
      .subscribe(jk => {
        this.joke = new Joke (jk);
      });
    this.jokeService.getAllCachedJokes()
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
