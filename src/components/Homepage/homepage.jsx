import React from 'react';
import AllDevices from '../Devices/AllDevices';
import FirstPageView from '../FirstPageView/FirstPageView';
import Progress from '../Progress/Progress';
import About from '../Abaut/Abaut';
import Faq from '../Faq/Faq';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import Contact from '../Contact/Contact';


function Homepage () {
    const classes = useStyles();

    console.log("Home");
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div>
        <FirstPageView />
        <AllDevices />
        <Progress />
        <About />
        <Faq />
        <Contact />
        </div>
    </main>
  )
}

export default Homepage;