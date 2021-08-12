import { combineReducers } from 'redux';
import { categoriesReducer } from './categories/categories-reducer';
import { selectedCategoryReducer } from './selectedCategory/selectedCategory-reducer';

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  selectedCategory: selectedCategoryReducer,
});
