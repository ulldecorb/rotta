const Lesson = require('../model/lessonsModel');

function lessonController() {
  async function getAll(req, res) {
    const lessons = await Lesson.find();
    res.json(lessons);
  }

  async function createOne(req, res) {
    const newLesson = new Lesson(req.body);
    try {
      await newLesson.save();
      res.json(newLesson);
    } catch (error) {
      res.send(error);
    }
  }

  async function getById(req, res) {
    try {
      const lessonID = await Lesson.findById(
        req.params.lessonID,
      );
      res.json(lessonID);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedLesson = await Lesson.findByIdAndUpdate(
        req.params.lessonID,
        req.body,
        { new: true },
      );
      res.json(updatedLesson);
    } catch (error) {
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Lesson.findByIdAndDelete(req.params.lessonID);
      res.status(204);
      res.json();
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById,
  };
}

module.exports = lessonController;
