import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getIngredients = () => async (dispatch) => {
  try {
    const { data } = await api.fetchIngredients();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addIngredients = (ingredient) => async (dispatch) => {
  try {
    const { data } = await api.addIngredients(ingredient);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

