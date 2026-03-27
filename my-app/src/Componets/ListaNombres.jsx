import { useState } from "react";

export const ListaNombres = () => {
    // Variables de estado para los nombres
    const [nombre, setNombre] = useState('');
    const [nombres, setNombres] = useState(["Juan", "María", "Pedro"]);

    const guardarNombre = () => {
        if (nombre.trim() === '') return; // evita vacíos
        setNombres([...nombres, nombre]);
        setNombre('');
    };

    return (
        <div className="ListaNombres">
            <p>Ingresar nombres:</p>
            <h1>Lista de Nombres</h1>

            <input 
                type="text" 
                value={nombre}
                placeholder="Ingrese un nombre"
                onChange={(e) => setNombre(e.target.value)}
            />

            <button onClick={guardarNombre}>Agregar</button>

            <ul>
                {nombres.map((item, index) => (
                    <li className="NombreItem" key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
