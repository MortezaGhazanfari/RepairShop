import React from 'react';
import { useLocation } from 'react-router-dom';

function NotebookManufacturer() {
  console.log('Notebook');
  const { state } = useLocation();
  console.log(state);
  return (<div>Hello</div>);
}

export default NotebookManufacturer;
