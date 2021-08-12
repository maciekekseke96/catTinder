import { imagesActionTypes } from './images-action-types';

export const setImages = (payload) => ({
  type: imagesActionTypes.SET_IMAGES,
  payload,
});
