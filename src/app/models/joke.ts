export class Joke {

  id: string;
  jokeText: string;
  status: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  toString(): string {
    return '\nJoke id: ' + this.id + '\nJoke: ' + this.jokeText + '\nStatus: ' + this.status + '\n';
  }
}
