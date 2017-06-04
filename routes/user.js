const router = require('koa-router')();
const User = require('../models/user');

router.get('/user', async(ctx) => {

    ctx.body = {
        response: 'node <3'
    }

});

router.post('/user', async(ctx) => {

    ctx.body = ctx.request;

});

module.exports = router;