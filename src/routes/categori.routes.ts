import { Router } from 'express';

import CategoriRepository from '../repositories/CategoriRepository';

const categoriRoutes = Router();
const categoriRepository = new CategoriRepository();

categoriRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  categoriRepository.create({
    name,
    description,
  });

  return response.status(201).send();
});

export { categoriRoutes };
