
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments("id");
        tbl.string("VIN", 17).notNullable().unique().index();
        tbl.string("make", 140).notNullable().index();
        tbl.string("model", 140).notNullable().index();
        tbl.integer("mileage", 7).notNullable().index();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};