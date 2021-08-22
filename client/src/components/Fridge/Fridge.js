import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getIngredients } from '../../actions/fridge';
import Ingredients from './Ingredients/Ingredients';
import FormFridge from '../FormFridge/FormFridge';
import './styles.css';


const Fridge = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [currentId, dispatch]);

  return (
    <div className='fridgepage'>
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Ingredients setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormFridge currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
    </div>
  );
};

export default Fridge;