import { useState } from "react";
import { Boton } from './Boton/Boton'
import './Calculadora.css'

export const Calculadora = () => {
    //Agrego hook para cambiar el valor de los botones
    const [data, setData] = useState({operacion:'', resultado:''});
    
    const escritura=(event)=>{
        if(data.operacion.length >= 10) return
        setData({...data, operacion: data.operacion + event.target.innerText})
    }
    const eliminar=()=>{
        setData({...data, operacion: data.operacion.slice(0, data.operacion.length - 1)})
    }
    const resultado=()=>{
        const resultado = eval(data.operacion)
        setData({...data, resultado: resultado})
    }
    return( 
        <>
            <span className='resultado'>{data.resultado}</span>
            <span className='display'>{data.operacion}</span>
                <div className='contenedor_calculadora'>
                <input className='input1' type="text" />
                <input className='input2' type="text" />
                <div className='buttons_container'>
                <Boton texto="C" clase="gris"/>
                <Boton texto="+/-" clase="gris"/>
                <Boton texto="%" clase="gris"/>
                <Boton texto="/" clase='operacion' handleClick={escritura}/>
                <Boton texto="7" clase='operacion' handleClick={escritura}/>
                <Boton texto="8" clase='operacion' handleClick={escritura}/>
                <Boton texto="9" clase='operacion' handleClick={escritura}/>
                <Boton texto="*" clase='operacion' handleClick={escritura}/>
                <Boton texto="4" clase='operacion' handleClick={escritura}/>
                <Boton texto="5" clase='operacion' handleClick={escritura}/>
                <Boton texto="6" clase='operacion' handleClick={escritura}/>
                <Boton texto="-" clase='operacion' handleClick={escritura}/>
                <Boton texto="1" clase='operacion' handleClick={escritura}/>
                <Boton texto="2" clase='operacion' handleClick={escritura}/>
                <Boton texto="3" clase='operacion' handleClick={escritura}/>
                <Boton texto="+" clase='operacion' handleClick={escritura}/>
                <Boton texto="0" clase='operacion' handleClick={escritura}/>
                <Boton texto="." clase='operacion' handleClick={escritura}/>
                <Boton texto="Borrar" clase='eliminar' handleClick={eliminar}/>
                <Boton texto="=" clase='boton' handleClick={resultado}/>
                </div>
            </div>
        </>
    )
}