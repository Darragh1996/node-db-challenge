exports.seed = function(knex) {
  return knex("resources").insert([
    { name: "paint", desc: "used to colour a surface" },
    { name: "brush", desc: "used to spread paint" },
    { name: "computer", desc: "an electronic device" }
  ]);
};
