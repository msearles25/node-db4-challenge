
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
      
        table.increments();
        table.string('name', 128)
              .notNullable()
              .index();
        table.string('instructions')
              .notNullable();
  })
  .createTable('ingredients', table => {

        table.increments();
        table.string('ingredientName', 128)
              .notNullable()
              .index();
        table.float('quantity')
             .notNullable();

  })
  .createTable('recipe_ingredients', table => {

        table.increments();
        table.integer('recipe_id')
             .unsigned()
             .notNullable()
             .references('id')
             .inTable('recipes')
             .onDelete('RESTRICT')
             .onUpdate('CASCADE')
        table.integer('ingredient_id')
             .unsigned()
             .notNullable()
             .references('id')
             .inTable('ingredients')
             .onDelete('RESTRICT')
             .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('recipe_ingredients')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipe')
};
