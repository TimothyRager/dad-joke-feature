import { Component, OnInit } from '@angular/core';
import {DadJokeService} from '../service/dad-joke.service';
import {Joke} from '../models/joke';
import {DadJokeDisplayComponent} from '../dad-joke-display/dad-joke-display.component';

@Component({
  selector: 'app-dad-joke-request',
  templateUrl: './dad-joke-request.component.html',
  styleUrls: ['./dad-joke-request.component.css']
})
export class DadJokeRequestComponent implements OnInit {
  constructor(private jokeService: DadJokeService) { }

  getRandom(): void {
    const dispArea = document.getElementById('JokeDisplay');
    dispArea.innerText = this.jokeService.getRandomJoke().toString();
  }

  getCached(): Joke[] {
    return this.jokeService.getAllCachedJokes();
  }

  ngOnInit() {
  }

}
