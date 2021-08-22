import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { addIngredients } from '../../actions/fridge';
    
const FridgeForm = ({ currentId, setCurrentId }) => {
    const [ingredientData, setIngredientData] = useState({
        ingredients: ''
    });
    const ingredient = useSelector((state) => (currentId ? state.ingredients.find((description) => description._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
  
    useEffect(() => {
      if (ingredient) setIngredientData(ingredient);
    }, [ingredient]);
  
    const clear = () => {
      setCurrentId(0);
      setIngredientData({ ingredients: ''});
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(addIngredients({ ...ingredientData}));
        clear();
    };


    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Enter An Ingredient</Typography>
                <TextField name="ingredients" variant="outlined" label="Ingredient" fullWidth value={ingredientData.ingredients}onChange={(e)=>setIngredientData({...ingredientData, ingredients: e.target.value})}/>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default FridgeForm;