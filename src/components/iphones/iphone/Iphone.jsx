import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
} from '@material-ui/core';
import { CardActionArea } from '@mui/material';

import useStyles from './styles';

const Iphone = ({ iphone }) => {
  const classes = useStyles();

  const slug = iphone.slug;
  const navigate = useNavigate();
  const handleGoToProducts = () => {
      const path = '../products';
      navigate(path, { state: { slug } } )
  }


  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleGoToProducts}>
        <CardMedia className={classes.media} image={iphone.assets[0].url} title={iphone.name} />
      </CardActionArea>
    </Card>
  );
};

export default Iphone;
