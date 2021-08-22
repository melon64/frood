import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchRecipes = () => API.get('/recipe');
export const createRecipe = (newRecipe) => API.post('/recipe', newRecipe);
export const deleteRecipe = (id) => API.delete(`/recipe/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const fetchIngredients = () => API.get('/fridge');
export const addIngredients = (newIngredient) => API.post('/fridge', newIngredient);