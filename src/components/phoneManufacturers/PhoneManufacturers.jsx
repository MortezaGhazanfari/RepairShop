import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useLocation } from 'react-router-dom';
import Phonemanufacturer from './phoneManufacturer/PhoneManufacturer';

import useStyles from './styles';

function PhoneManufacturers() {
  const classes = useStyles();

  const { state } = useLocation();
  const manufacturers = state.device.children;
  
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {manufacturers.map((manufacturer) => (
          <Grid key={manufacturer.id} item xs={12} sm={6} md={4} lg={3}>
            <Phonemanufacturer manufacturer={manufacturer} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default PhoneManufacturers;
