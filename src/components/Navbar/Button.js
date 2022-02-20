import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { IconButton, Badge, MenuItem } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

export function Button({totalItems}) {
  return (
    <IconButton component={Link} to="/cart" aria-label="Show cart items" color='inherit' >
    <Badge badgeContent={totalItems} color="secondary">
        <ShoppingCart className='btn' fontSize="large" />
    </Badge>
</IconButton>
  );
}