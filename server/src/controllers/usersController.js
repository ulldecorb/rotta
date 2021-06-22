const User = require('../model/userModel');

function usersController() {
  async function getAll(req, res) {
    const user = await User.find();
    res.json(user);
  }

  async function createOne(req, res) {
    const newUser = new User(req.body);
    try {
      await newUser.save();
      res.json(newUser);
    } catch (error) {
      res.send(error);
    }
  }

  async function getById(req, res) {
    try {
      const userID = await User.findById(
        req.params.userID,
      );
      res.json(userID);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userID,
        req.body,
        { new: true },
      );
      res.json(updatedUser);
    } catch (error) {
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await User.findByIdAndDelete(req.params.userID);
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

module.exports = usersController;
