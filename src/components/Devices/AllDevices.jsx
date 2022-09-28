import React, { useEffect, useState } from 'react';
import { commerce } from '../../lib/commerce';
import Grid from '@material-ui/core/Grid';
import Device from './Device/Device';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

const AllDevices = () => {
  const classes = useStyles();
  const [devices, setDevices] = useState([]);

  const fetchDevices = async () => {
    const { data } = await commerce.categories.list({ depth: 3 });
    setDevices(data);
  };
  useEffect(() => {
    fetchDevices();
  }, []);
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography text-align="center" style={{'text-align':"center",backgroundColor:'red'}}>
            Welches Gerät möchtest du reparieren?
          </Typography>
        </Grid>
        {devices.map((device) => (
          <Grid key={device.id} item xs={12} sm={6} md={4} lg={3}>
            <Device device={device} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default AllDevices;
