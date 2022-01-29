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

export default router;
