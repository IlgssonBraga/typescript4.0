import * as dotenv from 'dotenv';
import express from 'express';
import { routes } from './routes';

const app = express();
dotenv.config();

app.use(routes);

const { PORT } = process.env;

app.listen(3333, () =>
  console.log(`Server running! on http://localhost:${PORT || 5200}`),
);
