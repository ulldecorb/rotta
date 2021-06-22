const { Router } = require('express');
const themesController = require('../controllers/themesController')();

function themesRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(themesController.getAll)
    .post(themesController.createOne);

  routes
    .route('/:themeId')
    .delete(themesController.deleteById)
    .get(themesController.getById)
    .put(themesController.updateById);

  return routes;
}

module.exports = themesRouter();
