import { combineReducers } from 'redux'
import todos, { TODOS_DEFAULT_STATE } from './todos'
import wishes, { WISHES_DEFAULT_STATE } from './wishes'
import deliveryPlaces, { DELIVERY_PLACES_DEFAULT_STATE } from './delivery_places'
 
 const todoApp = combineReducers({
 todos,
 deliveryPlaces,
 wishes
 })
 
 export const DEFAULT_STATE = {
 todos: TODOS_DEFAULT_STATE,
 deliveryPlaces: DELIVERY_PLACES_DEFAULT_STATE,
 wishes: WISHES_DEFAULT_STATE
 }
 
 export default todoApp