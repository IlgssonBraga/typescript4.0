import { Router, Request, Response } from 'express';
import { User } from '../classes/User';
import { ComumUser } from '../classes/ComumUser';
import { Dog, ESex } from '../classes/Dog';

export const routes = Router();

routes.get('/types', (req: Request, res: Response) => {
  const user1 = new User('Ilgsson', 'ilgssonbraga@gmail.com', '123456');
  const user2 = new User('Arlaine', 'arlaine@gmail.com', '123456');
  const user3 = new ComumUser('Vinny', 'vinny@gmail.com', '123456', 'Braga');

  user1.sayName();
  console.log(user1.cargo);
  user2.sayName();
  console.log(user2.cargo);
  user3.sayName();
  console.log(user3.cargo);
  console.log(user3.surname);

  const dog1 = new Dog('Bob', 'vira lara', 'caramelo', ESex.M);
  console.log(dog1.name, dog1.race, dog1.color, dog1.sex);
  dog1.makeSoung();

  res.send('Hi');
});
