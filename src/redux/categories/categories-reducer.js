import { categoriesActionTypes } from './categories-action-types';

const INITIAL_STATE = {};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case categoriesActionTypes.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

export { categoriesReducer };
