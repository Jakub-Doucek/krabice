"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../models/todo");
class TodoController {
    static findAll(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            // Fetch all Todo’s from the database and return as payload
            const todos = yield todo_1.default.find({});
            ctx.body = todos;
        });
    }
    static create(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            // Create New Todo from payload sent and save to database
            const newTodo = new todo_1.default(ctx.request.body);
            const savedTodo = yield newTodo.save();
            ctx.body = savedTodo;
        });
    }
    static destroy(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get id from url parameters and find Todo in database
            const id = ctx.params.id;
            const todo = yield todo_1.default.findById(id);
            // Delete todo from database and return deleted object as reference
            const deletedTodo = yield todo.remove();
            ctx.body = deletedTodo;
        });
    }
    static update(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            // Find Todo based on id, then toggle done on/off
            const id = ctx.params.id;
            const todo = yield todo_1.default.findById(id);
            todo.done = !todo.done;
            // Update todo in database
            const updatedTodo = yield todo.save();
            ctx.body = updatedTodo;
        });
    }
}
exports.default = TodoController;
//# sourceMappingURL=todos.js.map