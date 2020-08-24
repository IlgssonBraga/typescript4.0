import { Animal } from './Animal';

export enum ESex {
  M = 'M',
  F = 'F',
}

export class Dog extends Animal {
  constructor(
    public name: string,
    public race: string,
    public color: string,
    public sex: ESex,
  ) {
    super();
  }

  makeSoung(): void {
    console.log('Au au');
  }
}
