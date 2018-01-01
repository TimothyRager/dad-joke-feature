export class Joke {

  id: string;
  joke: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
    console.log(this);
  }

  toString(): string {
    return 'Joke: ' + this.joke;
  }
}
