import { Router, Request, Response } from 'express';

export const routes = Router();

routes.get('/types', (req: Request, res: Response) => {
  res.send('Hi');
});
