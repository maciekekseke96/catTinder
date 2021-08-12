import { categoriesActionTypes } from './categories-action-types';

export const setCategories = (payload) => ({
  type: categoriesActionTypes.SET_CATEGORIES,
  payload,
});
