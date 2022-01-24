import  { Router } from 'express';


const router = Router();


router.get('/', async (req, res) => {
    const recipe = await req.context.models.Recipe.find();
    return res.send(recipe);
});



router.get('/:recipeId', async (req, res) => {
    const recipe = await req.context.models.Recipe.findById(
        req.params.recipeId,
        );
        
        return res.send(recipe);
});


router.post('/', async (req, res) => {
    const recipe = await req.context.models.Recipe.create (req.body);

    return res.send(recipe);
});

router.delete('/:recipeId', async (req, res) => {
    const recipe = await req.context.models.Recipe.findById(
        req.params.recipeId,
    );
    let result = null;
    if (recipe){
        result = await recipe.remove();
    }
    
    return res.send(result);
});

const createRecipes = async () => {
    const recipe1 = new models.Recipe ({
        id: 0,
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "spaghetti.jpg"
      });

      const recipe2 = new models.Recipe ({
        id: 1,
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "milkshake.jpg"
      });

      const recipe3 = new models.Recipe({ 
        id: 2,
        title: "Avocado Toast",
        instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "avocado_toast.jpg"
      });

    await recipe1.save();
    await recipe2.save();
    await recipe3.save();
  };
  //createRecipes(); // uncomment only once. Otherwise you will end up with many of the same
  
export default router;

// router.route('/')
//   .get(helpers.getRecipes)
//   .post(helpers.createRecipe)

// router.route('/:RecipeId')
//   .get(helpers.getRecipe)
//   .put(helpers.updateRecipe)
//   .delete(helpers.deleteRecipe)
