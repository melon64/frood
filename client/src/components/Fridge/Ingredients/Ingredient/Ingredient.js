import React from 'react';
import { Card, Button, CardMedia, Typography } from '@material-ui/core/';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './styles';

const Ingredient = ({ post }) => {
  const classes = useStyles();
  console.log(post);

  return (
    <Card className={classes.card}>
    <CardMedia className={classes.media} title={post.ingredients} />
    <div className={classes.overlay}>
        <Typography variant="h6">{post.ingredients}</Typography>
    </div>
      <div className={classes.overlay2}>
        <Button onClick={() => {}} style={{ color: 'white' }} size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
    </Card>
  );
};

export default Ingredient;