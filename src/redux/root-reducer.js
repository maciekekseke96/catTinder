import { combineReducers } from 'redux';
import { categoriesReducer } from './categories/categories-reducer';
import { selectedCategoryReducer } from './selectedCategory/selectedCategory-reducer';
import { imagesReducer } from './images/images-reducer';
import { votingDetailsReducer } from './votingDetails/votingDetails-reducer';

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  selectedCategory: selectedCategoryReducer,
  images: imagesReducer,
  votingDetails: votingDetailsReducer,
});
