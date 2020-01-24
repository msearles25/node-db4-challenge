
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredientName: 'ingredient 1' },
        { ingredientName: 'ingredient 2' },
        { ingredientName: 'ingredient 3' }
      ]);
    });
};
