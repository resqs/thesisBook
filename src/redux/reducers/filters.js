import {actionTypes} from '../actions/actionTypes'

const initialValue = {
  advisor: '',
  category: '',
  search: null
}

export const filters = (state = initialValue, action) => {
  switch (action.type) {

  case actionTypes.SET_ADVISOR_FILTER:
    return { ...initialValue, advisor: action.payload }

  case actionTypes.SET_CATEGORY_FILTER:
    return { ...initialValue, category: action.payload }

  case actionTypes.SEARCH_PROJECT_SUCCEEDED:
    return { ...initialValue, search: action.payload } // reset advisor and category to ''

  case actionTypes.RESET_SEARCH:
    return { ...state, search: null }

  default:
    return state
  }
}
