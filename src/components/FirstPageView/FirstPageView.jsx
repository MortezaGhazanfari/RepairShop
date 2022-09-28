import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import b1 from '../../assets/b1.jpg'


function FirstPageView(){
    console.log('firstpageView');
    //const { state } = useLocation();
    //console.log(state);
    return (
            <Grid container spacing={1} direction="row" justify="center" alignItems="center" style={{ backgroundImage: `url(${b1})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'}}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Typography variant='h5' style={{'background-color' :'#ebebe0'}}>
                        Smartphone defekt? iFix
                    </Typography>
                    <Typography variant='h5' style={{'background-color' :'#ebebe0'}}>
                        Smartwatch defekt? iFix
                    </Typography>
                    <Typography variant='h5' style={{'background-color' :'#ebebe0'}}>
                        Notebook defekt? iFix
                    </Typography>
                    <Typography variant='h5' style={{'background-color' :'#ebebe0'}}>
                        Tablet defekt? iFix
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Typography variant="caption">
                    iFix ist einer der führenden Online-Dienstleister für die professionelle Reparatur von Handys, Tablets, Notebooks und Smartwatches.Die Markenzeichen von uns sind ein komfortabler und absolut zuverlässiger Service sowie eine exzellente fachliche Qualität. Techniker mit jahrelanger Erfahrung in der Mobilfunkbranche sowie im Reparatur-Bereich setzen defekte oder beschädigte mobile Endgeräte aller Art schnell, kompetent und zuverlässig wieder instand.
                    </Typography>
                </Grid>
            </Grid>
    );
  }
  
  export default FirstPageView;