import {Component, Input, OnInit} from '@angular/core';
import {Joke} from '../models/joke';
import {DadJokeService} from '../service/dad-joke.service';

@Component({
  selector: 'app-dad-joke-display',
  templateUrl: './dad-joke-display.component.html',
  styleUrls: ['./dad-joke-display.component.css']
})
export class DadJokeDisplayComponent implements OnInit {

  @Input() joke: Joke;
  @Input() jokes: Joke[];


  constructor(private jokeService: DadJokeService) {}

  setJoke(joke: Joke): void {
    this.joke = joke;
  }

  setJokes(jokes: Joke[]): void {
    this.jokes = jokes;
  }

  ngOnInit() {
  }

}
