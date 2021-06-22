const { Router } = require('express');
const usersController = require('../controllers/usersController')();

function usersRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(usersController.getAll)
    .post(usersController.createOne);

  routes
    .route('/:userID')
    .delete(usersController.deleteById)
    .get(usersController.getById)
    .put(usersController.updateById);

  return routes;
}

module.exports = usersRouter();
