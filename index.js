const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const user = require('./routes/user');

mongoose.connect('mongodb://uri/api-koa2-demo');

const app = new Koa();
const router = new Router();

app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())

router
    .use(user.routes());


app.listen(3000);
console.log(`server running on port 3000`);
