exports.seed = function(knex) {
  return knex("projects").insert([
    {
      name: "code website",
      desc: "code a fully functioning website",
      completed: true
    },
    {
      name: "open restaurant",
      desc: "start a restaurant business",
      completed: false
    },
    { name: "paint house", completed: false }
  ]);
};
