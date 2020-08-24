interface IUser {
  sayName(): void;
  cargo: string;
}

export class User implements IUser {
  cargo = 'Admin';

  constructor(
    public name: string,
    public email: string,
    public password: string,
  ) {}

  sayName(): void {
    console.log(`Meu nome é ${this.name}`);
  }

  getCargo(): void {
    console.log(`Função: ${this.cargo}`);
  }
}
