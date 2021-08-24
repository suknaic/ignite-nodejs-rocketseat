import 'reflect-metadata';
import express, { NextFunction, Response, Request } from 'express';
import 'express-async-errors';
import swaggerUI from 'swagger-ui-express';

import { AppError } from '@error/AppError';

import { routes } from './routes';
import swaggerFile from '../../../swagger.json';

import createConnection from '../typeorm';
import '@shared/container';

createConnection();

const app = express();

app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'internal server Error !',
  });
});

app.listen(3333, () =>
  console.log(`serve is running http://localhost:${3333}`)
);
