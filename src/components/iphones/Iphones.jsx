import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useLocation } from 'react-router-dom';
import Iphone from './iphone/Iphone';

import useStyles from './styles';

function IPhones() {
  const classes = useStyles();

  const { state } = useLocation();
  const iphones = state.manufacturer.children;
  

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {iphones.map((iphone) => (
          <Grid key={iphone.id} item xs={12} sm={6} md={4} lg={3}>
            <Iphone iphone={iphone} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default IPhones;
