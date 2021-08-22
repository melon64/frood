import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createRecipe } from '../../actions/recipes';
    
const Form = ({ currentId, setCurrentId }) => {
    const [recipeData, setRecipeData] = useState({
        name: '', description:'', culture:'',directions:'', ingredients:'', file: '', creator:''
    });
    const recipe = useSelector((state) => (currentId ? state.recipes.find((description) => description._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
  
    useEffect(() => {
      if (recipe) setRecipeData(recipe);
    }, [recipe]);
  
    const clear = () => {
      setCurrentId(0);
      setRecipeData({ name: '', description:'', culture:'',directions:'', ingredients:'', file: '', creator: ''});
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createRecipe({ ...recipeData}));
        clear();
    };


    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Create A Recipe</Typography>
                <TextField name="name" variant="outlined" label="Name" fullWidth value={recipeData.name}onChange={(e)=>setRecipeData({...recipeData, name: e.target.value})}/>
                <TextField name="description" variant="outlined" label="Description" fullWidth value={recipeData.description}onChange={(e)=>setRecipeData({...recipeData, description: e.target.value})}/>
                <TextField name="culture" variant="outlined" label="Culture" fullWidth value={recipeData.culture}onChange={(e)=>setRecipeData({...recipeData, culture: e.target.value})}/>
                <TextField name="directions" variant="outlined" label="Directions" fullWidth value={recipeData.directions}onChange={(e)=>setRecipeData({...recipeData, directions: e.target.value})}/>
                <TextField name="ingredients" variant="outlined" label="Ingredients" fullWidth value={recipeData.ingredients}onChange={(e)=>setRecipeData({...recipeData, ingredients: e.target.value})}/>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setRecipeData({ ...recipeData, file: base64 })} /></div>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={recipeData.creator}onChange={(e)=>setRecipeData({...recipeData, creator: e.target.value})}/>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
                
            </form>
        </Paper>
    );
}

export default Form;