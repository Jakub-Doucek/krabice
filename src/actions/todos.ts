// action types
export const ADD_TODO = 'ADD_TODO'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const TODOS_FAILURE = 'TODOS_FAILURE'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const LOADED_TODOS = 'LOADED_TODOS'
export const FETCH_TODOS = 'FETCH_TODOS'

// action creators
export function addTodo(todo: any) {
return { type: ADD_TODO, todo }
}

export function addTodoSuccess(todo: any) {
return { type: ADD_TODO_SUCCESS, todo }
}

export function todosFailure(error: any) {
return { type: TODOS_FAILURE, error }
}

export function toggleTodo(id: any) {
return { type: TOGGLE_TODO, id }
}

export function deleteTodo(id: any) {
return { type: DELETE_TODO, id }
}

export function loadedTodos(todos: any) {
return { type: LOADED_TODOS, todos }
}

export function fetchTodos() {
return { type: FETCH_TODOS }
}