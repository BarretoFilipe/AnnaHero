exports.up = function(knex) {
  return knex.schema.createTable("organization", function(table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("phone").notNullable();
    table.string("city").notNullable();
    table.string("district").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("organization");
};
