import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home } from '../pages/Home';
import { Pagina2 } from '../pages/Pagina2';
import { Categorias } from '../pages/Categorias';
import { Contactos } from '../pages/Contactos';
import { PagNoVale } from '../pages/PagNoVale';
import { Nav } from '../Componets/Nav';

export function MyRoutes(){
    return(
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/pagina2' element={<Pagina2 />} />
                <Route path='/categorias' element={<Categorias />} />
                <Route path='/contactos' element={<Contactos />} />
                <Route path='/pagnovale' element={<PagNoVale />} />
            </Routes>
        </BrowserRouter>
    )
}