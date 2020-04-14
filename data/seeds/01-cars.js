
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          "VIN": "aaa",
          "make": "aaa",
          "model":"aaa",
          "mileage": 100,
        },
        {
          "VIN": "bbb",
          "make": "bbb",
          "model":"bbb",
          "mileage": 100,
          "transmission type": "bbb",
          "title status": "bbb"
        },
        {
          "VIN": "ccc",
          "make": "ccc",
          "model":"ccc",
          "mileage": 100,
          "transmission type": "ccc",
        }
      ]);
    });
};
