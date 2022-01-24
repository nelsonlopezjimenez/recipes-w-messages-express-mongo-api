const express = require('express');
const router = express.Router();
const db = require("../models");
const helpers = require("../helpers/recipes");
const { models } = require('mongoose');

router.route('/')
  .get(helpers.getRecipes)
  .post(helpers.createRecipe)

router.route('/:RecipeId')
  .get(helpers.getRecipe)
  .put(helpers.updateRecipe)
  .delete(helpers.deleteRecipe)

const createTodos = async () => {
  const recipe1 = new models.Recipe({
    title: "Spaghetti",
    instructions: "Spaghetti Instructions",
    ingredients: ["ingr1", "ingr2"],
    img: "spaghetti.jpg",
  });
  const recipe2 = new models.Recipe({
    title: "Milkshake",
    instructions: "Milkshake Instructions",
    ingredients: ["ingr1", "ingr2"],
    img: "milkshake.jpg",
  });
  await recipe1.save();
  await recipe2.save();
};
//createTodos(); // uncomment only once. Otherwise you will end up with many of the same

module.exports = router;
