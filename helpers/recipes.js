const db = require('../models');

// exports.getRecipes = function(req, res){
//     db.Recipe.find({title:"Spaghetti"})
//     .then(function(r){
//         res.json(r);
//     })
//     .catch(function(err){
//         res.send(err);
//     })
// }

// from wieruch version which is not using helpers
// router.get('/', async (req, res) => {
//     const recipe = await req.context.models.Recipe.find();
//     return res.send(recipe);
// });
exports.getRecipe = async (req, res) => {
    const recipe = await req.constex.models.Recipe.find();
    return res.send(recipe)
};
// exports.getRecipes = function(req, res){
//     db.Recipe.find()
//     .then(function(Recipes){
//         res.json(Recipes);
//     })
//     .catch(function(err){
//         res.send(err);
//     })
// }

exports.createRecipe = function(req, res){
  db.Recipe.create(req.body)
  .then(function(newRecipe){
      res.status(201).json(newRecipe);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getRecipe = function(req, res){
   db.Recipe.findById(req.params.RecipeId)
   .then(function(foundRecipe){
       res.json(foundRecipe);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.updateRecipe =  function(req, res){
   db.Recipe.findOneAndUpdate({_id: req.params.RecipeId}, req.body, {new: true})
   .then(function(Recipe){
       res.json(Recipe);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteRecipe = function(req, res){
   db.Recipe.remove({_id: req.params.RecipeId})
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;
