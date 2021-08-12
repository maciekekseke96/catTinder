import { selectedCategoryActionTypes } from './selectedCategory-action-types';

export const setSelectedCategory = (payload) => ({
  type: selectedCategoryActionTypes.SET_SELECTED_CATEGORY,
  payload,
});
