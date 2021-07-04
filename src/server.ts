import express from 'express';
import swaggerUI from 'swagger-ui-express';

import { routes } from './routes';
import swaggerFile from './swagger.json';

import './database';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(routes);

app.listen(3333, () => console.log('server is running'));
