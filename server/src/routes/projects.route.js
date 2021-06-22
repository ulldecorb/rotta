const { Router } = require('express');
const projectsController = require('../controllers/projectsController')();

function projectsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(projectsController.getAll)
    .post(projectsController.createOne);

  routes
    .route('/:projectId')
    .delete(projectsController.deleteById)
    .get(projectsController.getById)
    .put(projectsController.updateById);

  return routes;
}

module.exports = projectsRouter();
