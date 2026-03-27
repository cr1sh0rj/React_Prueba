import { Boton } from './Boton/Boton'
import './Calculadora.css'
export const Calculadora = () => {
        return( 
            <>
                <h1>Calculadora</h1>
                <div className='contenedor_calculadora'>
                    <input className='input1' type="text" />
                    <input className='input2' type="text" />
                    <div className='buttons_container'>
                        <Boton texto="C" clase="boton" ></Boton>
                        <Boton texto="+/-" clase="boton" ></Boton>
                        <Boton texto="%" clase="boton" ></Boton>
                        <Boton texto="/" clase="boton" ></Boton>
                        <Boton texto="7" clase="boton" ></Boton>
                        <Boton texto="8" clase="boton" ></Boton>
                        <Boton texto="9" clase="boton" ></Boton>
                        <Boton texto="*" clase="boton" ></Boton>
                        <Boton texto="4" clase="boton" ></Boton>
                        <Boton texto="5" clase="boton" ></Boton>
                        <Boton texto="6" clase="boton" ></Boton>
                        <Boton texto="-" clase="boton" ></Boton>
                        <Boton texto="1" clase="boton" ></Boton>
                        <Boton texto="2" clase="boton" ></Boton>
                        <Boton texto="3" clase="boton" ></Boton>
                        <Boton texto="+" clase="boton" ></Boton>
                        <Boton texto="0" clase="boton" ></Boton>
                        <Boton texto="." clase="boton" ></Boton>
                        <Boton texto="Borrar" clase="boton" ></Boton>
                        <Boton texto="=" clase="boton" ></Boton>
                    </div>
                </div>
            </>
        )
}