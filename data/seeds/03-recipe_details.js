
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_details').insert([
        { recipe_id: 1, ingredient_id: 1, ing_quantity: 1.5  },
        { recipe_id: 1, ingredient_id: 2, ing_quantity: 1.5  },
        { recipe_id: 1, ingredient_id: 3, ing_quantity: 1.5  },
        { recipe_id: 2, ingredient_id: 1, ing_quantity: 1.5  },
        { recipe_id: 2, ingredient_id: 2, ing_quantity: 1.5  },
        { recipe_id: 2, ingredient_id: 3, ing_quantity: 1.5  },
        { recipe_id: 3, ingredient_id: 1, ing_quantity: 1.5  },
        { recipe_id: 3, ingredient_id: 2, ing_quantity: 1.5  },
      ]);
    });
};
