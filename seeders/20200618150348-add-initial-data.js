'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Breakfast',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lunch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dinner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Side',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dessert',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])

    await queryInterface.bulkInsert('Recipes', [{
      name: 'Meatloaf',
      review: 'tasty and easy',
      description: 'good meal and good leftovers',
      url: 'http://meat.com',
      likes: 8,
      vegetarian: false,
      vegan: false,
      glutenfree: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Veg Stir fry',
      review: 'good for a side',
      description: 'veg for kids',
      url: 'http://veg.com',
      likes: 20,
      vegetarian: true,
      vegan: true,
      glutenfree: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Spaghetti',
      review: 'quick meal',
      description: 'quick meal and good for kids',
      url: 'http://pasta.com',
      likes: 13,
      vegetarian: true,
      vegan: true,
      glutenfree: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

    return await queryInterface.bulkInsert('RecipesCategories', [{
      recipesId: 1,
      categoriesId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      recipesId: 1,
      categoriesId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      recipesId: 1,
      categoriesId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      recipesId: 2,
      categoriesId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      recipesId: 2,
      categoriesId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('RecipesCategories', null, {})
    await queryInterface.bulkDelete('Recipes', null, {})
    await queryInterface.bulkDelete('Categories', null, {})
  }
};
