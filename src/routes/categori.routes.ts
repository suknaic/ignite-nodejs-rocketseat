import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const categoriRoutes = Router();

const categories = [];

categoriRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  categories.push({
    id: uuidv4(),
    name,
    description,
    created_at: new Date(),
  });

  return response.status(201).send();
});

export { categoriRoutes };
