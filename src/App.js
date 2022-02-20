import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar, Products, Cart, Checkout, Devices,  Phonemanufacturer, Iphones } from './components';
import { commerce } from './lib/commerce';
import Homepage from './components/Homepage/homepage';
import SmartwatchManufacturer from './components/smartwatchManufacturers/SmartwatchManufacturer';
import Navbar2 from './components/Navbar/Navbar2';
import Navbar3 from './components/Navbar/Navbar3';

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');



  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      <div >
        <CssBaseline />
        <Navbar3 totalItems={cart.total_items}/>
        <Routes>
          <Route exact path="/" element= { <Homepage /> } />
          <Route exact path="/products" element={ <Products onAddToCart={handleAddToCart } handleUpdateCartQty />} />
          <Route exact path="/cart" element={ <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} /> } />
          <Route path="/checkout" exact element={ <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} /> } />
          <Route exact path="/devices" element={ <Devices /> } />
          <Route exact path="/phonemanufacturer" element={ <Phonemanufacturer /> } />
          <Route exact path="/phonemanufacturer/iphones" element={ <Iphones /> } />
          <Route exact path="/smartwatchmanufacturer" element={ <SmartwatchManufacturer /> } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
