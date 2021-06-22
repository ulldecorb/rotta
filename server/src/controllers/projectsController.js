const Project = require('../model/projectsModel');

function projectsController() {
  async function getAll(req, res) {
    const projects = await Project.find();
    res.json(projects);
  }

  async function createOne(req, res) {
    const newProject = new Project(req.body);
    try {
      await newProject.save();
      res.json(newProject);
    } catch (error) {
      res.send(error);
    }
  }

  async function getById(req, res) {
    try {
      const projectId = await Project.findById(
        req.params.projectId,
      );
      res.json(projectId);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedProject = await Project.findByIdAndUpdate(
        req.params.projectId,
        req.body,
        { new: true },
      );
      res.json(updatedProject);
    } catch (error) {
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Project.findByIdAndDelete(req.params.projectId);
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

module.exports = projectsController;
