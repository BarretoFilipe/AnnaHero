exports.up = function(knex) {
  return knex.schema.createTable("incident", function(table) {
    table.increments();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("amount").notNullable();

    table.string("organization_id").notNullable();

    table
      .foreign("organization_id")
      .references("id")
      .inTable("organization");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incident");
};
