import {DeliveryPlaceModel} from '../models/deliveryPlace.model'

// action types
export const ADD_DELIVERY_PLACE = 'ADD_DELIVERY_PLACE'
export const ADD_DELIVERY_PLACE_SUCCESS = 'ADD_DELIVERY_PLACE_SUCCESS'
export const DELIVERY_PLACES_FAILURE = 'DELIVERY_PLACES_FAILURE'
export const DELETE_DELIVERY_PLACE = 'DELETE_DELIVERY_PLACE'
export const LOADED_DELIVERY_PLACES = 'LOADED_DELIVERY_PLACES'
export const FETCH_DELIVERY_PLACES = 'FETCH_DELIVERY_PLACES'

// action creators
export function addDeliveryPlace(deliveryPlace: DeliveryPlaceModel) {
return { type: ADD_DELIVERY_PLACE, deliveryPlace }
}

export function addDeliveryPlaceSuccess(deliveryPlace: DeliveryPlaceModel) {
return { type: ADD_DELIVERY_PLACE_SUCCESS, deliveryPlace }
}

export function deliveryPlacesFailure(error: any) {
return { type: DELIVERY_PLACES_FAILURE, error }
}

export function deleteDeliveryPlace(id: any) {
return { type: DELETE_DELIVERY_PLACE, id }
}

export function loadedDeliveryPlaces(deliveryPlaces: any) {
return { type: LOADED_DELIVERY_PLACES, deliveryPlaces }
}

export function fetchDeliveryPlaces() {
return { type: FETCH_DELIVERY_PLACES }
}