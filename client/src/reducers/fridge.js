import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';

export default (ingredients = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...ingredients, action.payload];
    default:
      return ingredients;
  }
};