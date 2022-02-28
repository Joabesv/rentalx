import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepositories';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  categoriesRepository.create({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get('/', (req, res) => {
  const categoriesData = categoriesRepository.list();

  return res.json(categoriesData);
});

export { categoriesRoutes };
