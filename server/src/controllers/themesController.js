const Theme = require('../model/themeModel');

function themesController() {
  async function getAll(req, res) {
    const theme = await Theme.find();
    res.json(theme);
  }

  async function createOne(req, res) {
    const newTheme = new Theme(req.body);
    try {
      await newTheme.save();
      res.json(newTheme);
    } catch (error) {
      res.send(error);
    }
  }

  async function getById(req, res) {
    try {
      const themeId = await Theme.findById(
        req.params.themeId,
      );
      res.json(themeId);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedTheme = await Theme.findByIdAndUpdate(
        req.params.themeId,
        req.body,
        { new: true },
      );
      res.json(updatedTheme);
    } catch (error) {
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Theme.findByIdAndDelete(req.params.themeId);
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

module.exports = themesController;
