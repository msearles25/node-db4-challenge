
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'recipe 1', instructions: 'Just make it' },
        { name: 'recipe 2', instructions: 'Just make it'},
        { name: 'recipe 3', instructions: 'Just make it' }
      ]);
    });
};
