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

router.get("/resources", (req, res) => {
  Projects.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "could not get resources" });
    });
});

router.post("/resources", (req, res) => {
  Projects.addResource(req.body)
    .then(id => {
      res.json(id);
    })
    .catch(err => {
      res.status(500).json({ message: "could not add resource" });
    });
});

module.exports = router;
