import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import {deleteRecipe} from '../../../actions/recipes';
import useStyles from './styles';

const Recipe = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.file || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.name} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?._id === post?.creator) && (
      <div className={classes.overlay2}>
        <Button onClick={() => setCurrentId(post._id)} style={{ color: 'white' }} size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.ingredients}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.name}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {(user?.result?._id === post?.creator) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deleteRecipe(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Recipe;