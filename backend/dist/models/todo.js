"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* models/todo.ts */
const mongoose = require('mongoose');
// Declare Schema
const TodoSchema = new mongoose.Schema({
    description: { type: String },
    done: { type: Boolean },
}, { timestamps: true });
// Declare Model to mongoose with Schema
const Todo = mongoose.model('Todo', TodoSchema);
// Export Model to be used in Node
exports.default = mongoose.model('Todo');
//# sourceMappingURL=todo.js.map