import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Badge, MenuItem } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './styles2';

const Navbar2 = ({ totalItems }) => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <hi>Logo</hi>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/home" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/repair" activeStyle>
                    Reparatur
                </NavLink>
                <NavLink to="/process" activeStyle>
                    Ablauf
                </NavLink>
                <NavLink to="/about" activeStyle>
                    Über uns
                </NavLink>
                <NavLink to="/faq" activeStyle>
                    FAQ
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Kontakt
                </NavLink>
                <IconButton component={Link} to="/cart" aria-label="Show cart items" color='inherit' >
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart color='primary' />
                    </Badge>
                </IconButton>
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar2