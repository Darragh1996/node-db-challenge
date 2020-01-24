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

function getTasks() {
  return db("projects")
    .select("projects.name as project", "resources.name", "tasks.desc")
    .innerJoin("tasks", "projects.id", "tasks.project_id")
    .innerJoin("resources", "resources.id", "tasks.resources_id");
}

function addTask(newTask) {
  return db("tasks").insert(newTask);
}

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResource,
  getTasks,
  addTask
};
