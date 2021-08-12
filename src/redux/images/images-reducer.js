import { imagesActionTypes } from './images-action-types';

const INITIAL_STATE = [];

const imagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case imagesActionTypes.SET_IMAGES:
      return { ...state, images: action.payload };
    default:
      return state;
  }
};

export { imagesReducer };
