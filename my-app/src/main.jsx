import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { ListaNombres } from './Componets/ListaNombres';
// import { App } from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListaNombres />
    {/* <App /> */}
  </StrictMode>
);