import express from 'express';

import { categoriRoutes } from './routes/categori.routes';
import { specificationRouter } from './routes/specification.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriRoutes);
app.use('/specifications', specificationRouter);

app.listen(3333, () => console.log('server is running'));
