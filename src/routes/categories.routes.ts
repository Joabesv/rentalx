import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepositories';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
  const categoriesData = categoriesRepository.list();

  return res.json(categoriesData);
});

export { categoriesRoutes };
