const db = require("../data/db-config");

function getProjects() {
  return db("projects");
}

function addProject(newProject) {
  return db("projects").insert(newProject);
}

function getResources() {
  return db("resources");
}

function addResource(newResource) {
  return db("resources").insert(newResource);
}

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResource
};
