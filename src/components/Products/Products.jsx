import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useLocation } from 'react-router-dom';

import Product from './Product/Product';
import { commerce } from '../../lib/commerce';

import useStyles from './styles';

const Products = ({ onAddToCart }) => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  const { state } = useLocation();
  console.log(state);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({ category_slug: state.slug});
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

