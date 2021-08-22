import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Recipe from './Ingredient/Ingredient';
import useStyles from './styles';

const Ingredients = ({ setCurrentId }) => {
    const recipes = useSelector((state) => state.recipes);

    const classes = useStyles();
  
    return (
      !recipes.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {recipes.map((recipe) => (
            <Grid key={recipe._id} item xs={12} sm={6} md={6}>
              <Recipe post={recipe} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )
    );
}

export default Ingredients;