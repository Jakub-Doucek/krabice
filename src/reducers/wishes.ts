import {
    WISHES_FAILURE,
    LOADED_WISHES,
    ADD_GIVER,
    ADD_GIVER_SUCCESS,
    ADD_GIVER_FAIL,
    ADD_GIVER_FAIL_CONFIRM,
    FETCH_WISHES
  } from '../actions/wishes'
  
  export const WISHES_DEFAULT_STATE = {
    loading: false,
    saving: false,
    error: '',
    items: []
  }
  
  export default function wishes (state = WISHES_DEFAULT_STATE, action: any) {
    switch (action.type) {
      case LOADED_WISHES:
        return {...state, items: action.wishes, loading: false}
  
      case FETCH_WISHES: {
        return {...state, loading: true}
      }

      case ADD_GIVER: {
        return {...state, saving: true}
      }

      case ADD_GIVER_SUCCESS:
        return {
          ...state,
          items: state.items.map((wish: any) =>
          wish._id === action.wish._id ? action.wish : wish
          ),
          saving: false
        }

      case ADD_GIVER_FAIL:
        return { ...state, loading: true, saving: false, addGiverFailed: true }

      case ADD_GIVER_FAIL_CONFIRM:
        return { ...state, loading: true, saving: false, addGiverFailed: false }  

      case WISHES_FAILURE:
        return {...state, loading: false, saving: false, error: action.error}
  
      default:
        return state
    }
  }
  