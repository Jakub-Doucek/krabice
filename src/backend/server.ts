// server.ts

import Koa = require("koa")
import Router = require("koa-router")
import koaBody = require("koa-body");
import * as mongoose from "mongoose";

// create app instance
const app = new Koa();
const router = new Router()

// middleware functions
app.use(koaBody());

let books = require('./books');
// Use the Router on the sub route /books
app.use(books.routes());

require('./routes')(router)
app.use(router.routes())

app.use(require('koa-static')('./build'))

app.listen(process.env.PORT || 4444);

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://krabicak:LT5wZJHn05hZFHUf@krabice.jxpw74n.mongodb.net/krabice?retryWrites=true&w=majority');
module.exports = app