"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const router = new Router();
const todos_1 = require("../controllers/todos");
router.get('/', todos_1.default.findAll);
router.post('/', todos_1.default.create);
router.post('/:id', todos_1.default.update);
router.delete('/:id', todos_1.default.destroy);
module.exports = router.routes();
//# sourceMappingURL=todos.js.map