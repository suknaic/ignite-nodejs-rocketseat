import { Router } from 'express';

import Categori from '../model/Categori';

const categoriRoutes = Router();

const categories: Categori[] = [];

categoriRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const category = new Categori();

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).send();
});

export { categoriRoutes };
