// action types
export const LOADED_WISHES = 'LOADED_WISHES'
export const FETCH_WISHES = 'FETCH_WISHES'
export const ADD_GIVER = 'ADD_GIVER'
export const ADD_GIVER_SUCCESS = 'ADD_GIVER_SUCCESS'
export const WISHES_FAILURE = 'WISHES_FAILURE'

// action creators
export function loadedWishes(wishes: any) {
return { type: LOADED_WISHES, wishes }
}

export function fetchWishes() {
return { type: FETCH_WISHES }
}

export function addGiver(_id: any, giver: string) {
    return { type: ADD_GIVER, _id, giver }
}

export function addGiverSuccess(wish: any) {
    return { type: ADD_GIVER_SUCCESS, wish }
    }

export function wishesFailure(error: any) {
    return { type: WISHES_FAILURE, error }
}