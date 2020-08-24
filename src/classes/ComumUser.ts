import { User } from './User';

export class ComumUser extends User {
  cargo = 'Comum';

  constructor(
    public name: string,
    public email: string,
    public password: string,
    public surname: string,
  ) {
    super(name, email, password);
  }
}
