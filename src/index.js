import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware
app.use(cors());

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Our middleware to authenticate user DELETED

// Custom middleware in Modular Models in Express as Data sources. CONTEXT 
app.use(async (req, res, next) => {
    req.context = {
        models,
        me: await models.User.findByLogin('rwieruch'),
    };
    next();
});

// * ROUTES * //
// Mount routes as modular routes. Each route receives a URI
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);
app.use('/api/recipes', routes.recipe);


// ROOT ROUTES
// ROUTE SESSION as pseudo authentication

// ROUTES '/users'

// MESSAGES ROUTES


// * START * //
// SERVER PORT LISTENING
// Connect asynchronously and start listening
const eraseDatabaseOnSync = true;

connectDb().then(async () => {
    if (eraseDatabaseOnSync){
        await Promise.all([
            models.User.deleteMany({}),
            models.Message.deleteMany({}),
        ]);

        createUserWithMessages();
        //createRecipes(); //PENDING run only once or eraseOnSync
    }
    app.listen(process.env.PORT, () =>
        console.log(`Example app listening on port ${process.env.PORT}!`),
    );
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
  
const createUserWithMessages = async () => {
    const user1 = new models.User({
        userName: 'rwieruch',
    });
    const user2 = new models.User({
        userName: 'ddavis',
    });
    const message1 = new models.Message({
        text: 'Published the ROAD TO LEARN REACT',
        user: user1.id,
    });
    const message2 = new models.Message({
        text: 'Happy to release ......',
        user: user2.id,
    });
    const message3 = new models.Message({
        text: 'Published a complete...... ',
        user: user2.id,
    });

    await message1.save();
    await message2.save();
    await message3.save();

    await user1.save();
    await user2.save();
    
};