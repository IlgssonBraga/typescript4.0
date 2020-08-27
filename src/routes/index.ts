import { Router, Request, Response } from 'express';
import { Ventilador } from '../classes/Ventilador';

export const routes = Router();

routes.get('/types', (req: Request, res: Response) => {
  const vent1 = new Ventilador('Ventilador Arno', '220V');

  console.log(vent1.nome);
  console.log(vent1.voltagem);
  console.log(vent1.status);
  vent1.Testar();
  vent1.Ligar();
  console.log(vent1.status);
  vent1.Desligar();
  console.log(vent1.status);

  res.send('Hi');
});
