export class Joke {

  jokeId: string;
  jokeText: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  toString(): string {
    return '\nJoke id: ' + this.jokeId + '\nJoke: ' + this.jokeText + '\n';
  }
}
