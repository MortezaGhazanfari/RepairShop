import React from 'react';
import AllDevices from '../Devices/AllDevices';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';


function Homepage () {
    const classes = useStyles();

    console.log("Home");
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
        <h1>Home</h1>
        <AllDevices />
        <h1>Ablauf</h1>
        <h1>Über uns</h1>
        <h1>FAQ</h1>
        <h1>Kontakt</h1>

    </main>
  )
}

export default Homepage;