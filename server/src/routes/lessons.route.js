const { Router } = require('express');
const lessonController = require('../controllers/lessonsController')();

function lessonsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(lessonController.getAll)
    .post(lessonController.createOne);

  routes
    .route('/:lessonID')
    .delete(lessonController.deleteById)
    .get(lessonController.getById)
    .put(lessonController.updateById);

  return routes;
}

module.exports = lessonsRouter();
