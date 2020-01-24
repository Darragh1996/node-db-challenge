exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .text("name", 128)
        .unique()
        .notNullable();
      tbl.text("desc");
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .text("name", 128)
        .notNullable()
        .unique();
      tbl.text("desc");
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .references("id")
        .inTable("projects")
        .notNullable()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("resources_id")
        .references("id")
        .inTable("resources")
        .notNullable()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.text("desc").notNullable();
      tbl.text("notes", 128);
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema;
  dropTableIfExists("projects");
  dropTableIfExists("resources");
  dropTableIfExists("tasks");
};
