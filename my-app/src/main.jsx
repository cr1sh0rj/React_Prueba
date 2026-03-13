import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ListaNombres } from './Componets/ListaNombres'
/*import { Maps } from './Componets/Maps'*/
/*import App from './App'*/ 
/*import { Estados } from './Componets/Estados'*/
/*import { Propiedades } from './Componets/Propiedades'*/
/*import { Sumar } from './Componets/Sumar'*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Estados/> */}
    {/* <Propiedades/> */}
    {/* <Maps/> */}
    {/* <Sumar/> */}
    <ListaNombres/> 

  </StrictMode>
)
