const db = require("../data/db-config");

function getProjects() {
  return db("projects");
}

function addProject(newProject) {
  return db("projects").insert(newProject);
}

module.exports = {
  getProjects,
  addProject
};
