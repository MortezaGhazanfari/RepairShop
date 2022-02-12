import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
} from '@material-ui/core';
import { CardActionArea } from '@mui/material';

import useStyles from './styles';

const Phonemanufacturer = ({ manufacturer }) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const handleGoToMoManufacturer = () => {
    if (manufacturer.name === 'iPhone') {
      const path = '/phonemanufacturer/iphones';
      navigate(path, { state: { manufacturer } });
    } else {
      const path = '/phonemanufacturer/samsungs';
      navigate(path, { state: { manufacturer } });
    }
  };
  console.log(manufacturer);
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleGoToMoManufacturer}>
        <CardMedia className={classes.media} image={manufacturer.assets[0].url} title={manufacturer.name} />
      </CardActionArea>
    </Card>
  );
};

export default Phonemanufacturer;
