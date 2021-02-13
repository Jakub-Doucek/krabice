// server.ts

import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as koaBody from 'koa-body';
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

app.listen(process.env.PORT || 4000);

mongoose.connect('mongodb://localhost:27017/darecky_db');
module.exports = app