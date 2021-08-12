import { selectedCategoryActionTypes } from './selectedCategory-action-types';

const INITIAL_STATE = {};

const selectedCategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case selectedCategoryActionTypes.SET_SELECTED_CATEGORY:
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};

export { selectedCategoryReducer };
