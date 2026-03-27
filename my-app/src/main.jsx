import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { Calculadora } from './Componets/Calculadora';
// import { App } from './App';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculadora />
    {/* <App /> */}
  </StrictMode>
);