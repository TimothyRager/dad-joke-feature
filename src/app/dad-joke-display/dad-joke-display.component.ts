import {Component, Input, OnInit} from '@angular/core';
import {Joke} from "../models/joke";

@Component({
  selector: 'app-dad-joke-display',
  templateUrl: './dad-joke-display.component.html',
  styleUrls: ['./dad-joke-display.component.css']
})
export class DadJokeDisplayComponent implements OnInit {

  @Input()
  joke: Joke;

  constructor(joke: Joke) {this.joke = joke; }

  ngOnInit() {
  }

}
