export class Joke {

  id: string;
  joke: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  toString(): string {
    return 'Joke: ' + this.joke;
  }
}
