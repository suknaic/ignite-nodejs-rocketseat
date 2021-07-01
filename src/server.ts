import express from 'express';

import { categoriRoutes } from './routes/categori.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriRoutes);

app.listen(3333, () => console.log('server is running'));
