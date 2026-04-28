import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
    
import { CrudApp } from './Componets/Crud/CrudApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
      <CrudApp  />
  </React.StrictMode>
);
