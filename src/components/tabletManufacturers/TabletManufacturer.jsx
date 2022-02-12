import React from 'react';
import { useLocation } from 'react-router-dom';

function TabletManufacturer() {
  console.log('tablet');
  const { state } = useLocation();
  console.log(state);
  return (<div>Hello</div>);
}

export default TabletManufacturer;
