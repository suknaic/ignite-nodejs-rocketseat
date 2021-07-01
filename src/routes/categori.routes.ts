import { Router } from 'express';

import CategoriRepository from '../repositories/CategoriRepository';

const categoriRoutes = Router();
const categoriRepository = new CategoriRepository();

categoriRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoriAlredyExistis = categoriRepository.findByName(name);

  if (categoriRepository) {
    return response.status(400).json({ error: 'Categori Alredy existis' });
  }

  categoriRepository.create({
    name,
    description,
  });

  return response.status(201).send();
});

categoriRoutes.get('/', (request, response) => {
  const allCategories = categoriRepository.list();

  return response.status(200).json(allCategories);
});

export { categoriRoutes };
