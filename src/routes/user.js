import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const users = await req.context.models.User.find({});

    return res.send(users);
});

router.get('/:userId', async (req, res) => {
    const user =  await req.context.models.User.findeById(
        req.params.userId,
    );
    return res.send(user);
});

export default router;
