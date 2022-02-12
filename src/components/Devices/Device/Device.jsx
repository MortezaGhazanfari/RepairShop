import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
} from '@material-ui/core';
import { CardActionArea } from '@mui/material';

import useStyles from './styles';

const Device = ({ device }) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const handleGoToDevice = () => {
    if (device.name === 'Smartphone') {
      const path = '/phonemanufacturer';
      navigate(path, { state: { device } });
    } else if (device.name === 'Tablet') {
      const path = '/tabletManufacturer';
      navigate(path, { state: { device } });
    } else if (device.name === 'Smartwatch') {
      const path = '/smartwatchmanufacturer';
      navigate(path, { state: { device } });
    } else {
      const path = '/notebookManufacturer';
      navigate(path, { state: { device } });
    }
  };
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleGoToDevice}>
        <CardMedia className={classes.media} image={device.assets[0].url} title={device.name} />
      </CardActionArea>
    </Card>
  );
};

export default Device;
