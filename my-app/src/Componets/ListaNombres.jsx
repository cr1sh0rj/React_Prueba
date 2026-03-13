import { useState } from "react";
export const ListaNombres = () => {
    //Variables de estados para los nombres
    const [nombre, setNombre] = useState('');
    const [nombres, setNombres] = useState(["Juan", "María", "Pedro"]);
    const guardarNombre = () => {
        setNombres([...nombres, nombre]);  
        setNombre('');
    }
    return (
        <div className="ListaNombres">
            <p>Ingresar nombres:</p>
            <h1>Lista de Nombres</h1>
            <input 
                type="text" 
                value={nombre}
                onChange={(e) => {setNombre(e.target.value)}}
                placeholder="Ingrese un nombre" 
            />
            <button onClick={guardarNombre}>Agregar</button>
             <ul>
                {nombres.map((nombre, index) =>{
                    return (
                        <li className="NombreItem" key={index}>{nombre}</li>
                    );
                } )}
            </ul>     
        </div>
    );
};