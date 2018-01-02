export class Joke {

  id: string;
  joke: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  toString(): string {
    return ('\nJoke: ' + this.joke + '\n');
  }
}
