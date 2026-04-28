import { useState } from "react"
import { CrudForm } from "./CrudForm"
import { CrudTable } from "./CrudTable"

// Creo la base de datos dentro de un arreglo
const baseDatos = [
    {id:1, equipo:'Millonarios', pais: 'Colombia'},
    {id:2, equipo:'Liverpool', pais: 'Inglaterra'},
    {id:3, equipo:'Cerdos', pais: 'Bolivia'},
    {id:4, equipo:'Nacional', pais: 'Colombia'},
    {id:5, equipo:'Real Madrid', pais: 'España'},
]

export const CrudApp = ()=>{

    // Hook para manejar la base de datos en equipos queda toda la base
    const [equipos, setEquipos] = useState(baseDatos);
    const addEquipos = (equipo) =>{
        setEquipos([...equipos, equipo])
    }
    return(
        <div>
            <h2>Crud Equipos de futbol</h2>
            {/* Formulario para los datos */}
                <CrudForm addEquipos={addEquipos}/>
		    {/* Aqui inserto la variable equipos */}
                <CrudTable equipos={equipos}/>
        </div>
    )
}
