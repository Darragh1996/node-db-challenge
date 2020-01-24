exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      desc: "turn on computer",
      notes: "blah",
      completed: true,
      project_id: 1,
      resources_id: 3
    },
    {
      desc: "code til done",
      notes: "blah",
      completed: false,
      project_id: 1,
      resources_id: 3
    },
    {
      desc: "turn of computer",
      notes: "blah",
      completed: true,
      project_id: 1,
      resources_id: 3
    }
  ]);
};
