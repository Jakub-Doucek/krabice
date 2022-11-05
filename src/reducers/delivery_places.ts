import {
    ADD_DELIVERY_PLACE,
    ADD_DELIVERY_PLACE_SUCCESS,
    DELIVERY_PLACES_FAILURE,
    DELETE_DELIVERY_PLACE,
    LOADED_DELIVERY_PLACES,
    FETCH_DELIVERY_PLACES
  } from '../actions/delivery_places'
import { DeliveryPlaceModel } from '../models/deliveryPlace.model'
  
  export const DELIVERY_PLACES_DEFAULT_STATE = {
    loading: false,
    saving: false,
    error: '',
    deliveryPlaces: []
  }
  
  export default function deliveryPlaces (state = DELIVERY_PLACES_DEFAULT_STATE, action: any) {
    switch (action.type) {
      case LOADED_DELIVERY_PLACES:
        return {...state, deliveryPlaces: action.deliveryPlaces, loading: false}
  
      case FETCH_DELIVERY_PLACES: {
        return {...state, loading: true}
      }
  
      case ADD_DELIVERY_PLACE:
        return {...state, saving: true}
  
      case ADD_DELIVERY_PLACE_SUCCESS:
        return {
          ...state,
          deliveryPlaces: state.deliveryPlaces.concat(action.deliveryPlace),
          saving: false
        }
  
      case DELIVERY_PLACES_FAILURE:
        return {...state, loading: false, saving: false, error: action.error}
  
      case DELETE_DELIVERY_PLACE:
        return {
          ...state,
          deliveryPlaces: state.deliveryPlaces.reduce((deliveryPlaces: DeliveryPlaceModel[], deliveryPlace: DeliveryPlaceModel) =>
            deliveryPlace.id !== action.id ? deliveryPlaces.concat(deliveryPlace) : deliveryPlaces, []
          )
        }
  
      default:
        return state
    }
  }
  