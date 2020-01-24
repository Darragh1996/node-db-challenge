const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "could not get projects" });
    });
});

router.post("/", (req, res) => {
  Projects.addProject(req.body)
    .then(ids => {
      res.json(ids);
    })
    .catch(err => {
      console.log("hello");
      res.status(500).json({ message: "something went wrong" });
    });
});

module.exports = router;
