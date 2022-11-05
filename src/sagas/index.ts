import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, FETCH_TODOS, loadedTodos, addTodoSuccess, todosFailure } from '../actions/todos'
import { ADD_GIVER, FETCH_WISHES, addGiverSuccess, loadedWishes, wishesFailure } from '../actions/wishes'
import { FETCH_DELIVERY_PLACES, loadedDeliveryPlaces, deliveryPlacesFailure, ADD_DELIVERY_PLACE, addDeliveryPlaceSuccess} from '../actions/delivery_places'


function* getAllTodos () {
  try {
    const res = yield call(fetch, 'v1/todos')
    const todos = yield res.json()
    yield put(loadedTodos(todos))
  } catch (e) {
    yield put(todosFailure(e.message))
  }
}

function* getAllWishes () {
  try {
    const res = yield call(fetch, 'v1/wishes')
    const wishes = yield res.json()
    yield put(loadedWishes(wishes))
  } catch (e) {
    yield put(wishesFailure(e.message))
  }
}

function* saveTodo (action: any) {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(action.todo),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    const res = yield call(fetch, 'v1/todos', options)
    const todo = yield res.json()
    yield put(addTodoSuccess(todo))
  } catch (e) {
    yield put(todosFailure(e.message))
  }
}

function* deleteTodo (action: any) {
  try {
    yield call(fetch, `v1/todos/${action.id}`, { method: 'DELETE' })
  } catch (e) {
    yield put(todosFailure(e.message))
  }
}

function* updateTodo (action: any) {
  try {
    yield call(fetch, `v1/todos/${action.id}`, { method: 'POST' })
  } catch (e) {
    yield put(todosFailure(e.message))
  }
}

function* getAllDeliveryPlaces () {
  try {
    const res = yield call(fetch, 'v1/delivery-places')
    const deliveryPlaces = yield res.json()
    yield put(loadedDeliveryPlaces(deliveryPlaces))
  } catch (e) {
    yield put(deliveryPlacesFailure(e.message))
  }
}

function* saveDeliveryPlace (action: any) {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(action.deliveryPlace),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    const res = yield call(fetch, 'v1/delivery-places', options)
    const deliveryPlace = yield res.json()
    yield put(addDeliveryPlaceSuccess(deliveryPlace))
  } catch (e) {
    yield put(deliveryPlacesFailure(e.message))
  }
}

function* addNewGiver (action: any) {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(action),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    const res = yield call(fetch, 'v1/wishes/giver/', options)
    const wish = yield res.json()
    yield put(addGiverSuccess(wish))
  } catch (e) {
    yield put(wishesFailure(e.message))
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_TODOS, getAllTodos);
  yield takeLatest(ADD_TODO, saveTodo);
  yield takeLatest(DELETE_TODO, deleteTodo);
  yield takeEvery(TOGGLE_TODO, updateTodo);

  yield takeLatest(FETCH_DELIVERY_PLACES, getAllDeliveryPlaces);
  yield takeLatest(ADD_DELIVERY_PLACE, saveDeliveryPlace);

  yield takeLatest(FETCH_WISHES, getAllWishes);
  yield takeLatest(ADD_GIVER, addNewGiver);
}

export default rootSaga;