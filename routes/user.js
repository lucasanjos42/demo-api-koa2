const router = require('koa-router')();
const User = require('../models/user');

router.get('/user', async(ctx) => {

    const users = await User.find({});

    ctx.body = {
        users
    };

});

router.post('/user', async ctx => {

    try {

        const user = new User(ctx.request.body);

        await user.save();

        ctx.body = {
            user
        };

    } catch (error) {

        ctx.body = {
            error
        };

        ctx.status = 500;

    }

});

router.put('/user/:id', async ctx => {

    try {

        const id = ctx.params.id;

        const param = {
            '_id': id
        };

        const user = await User.update(param, ctx.request.body);

        ctx.body = {
            user
        };

    } catch (error) {

        ctx.body = {
            error
        };

        ctx.status = 500;

    }

});

module.exports = router;