import React from 'react';
import { useLocation } from 'react-router-dom';

function SmartwatchManufacturer() {
  console.log('smartwatch');
  const { state } = useLocation();
  console.log(state);
  return (<div>Hello</div>);
}

export default SmartwatchManufacturer;
