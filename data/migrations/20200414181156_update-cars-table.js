
exports.up = function(knex) {
    return knex.schema.table("cars", tbl => {
        tbl.string("transmission type", 140).index();
        tbl.string("title status", 140).index();
      });
};

exports.down = function(knex) {
    return knex.schema.table("cars", tbl => {
        tbl.dropColumns("transmission type", "title status")
    });
};