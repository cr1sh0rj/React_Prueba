import { useEffect, useState } from "react"
import { CrudForm } from "./CrudForm"
import { CrudTable } from "./CrudTable"
import './CrudStyle.css'
// Creo la base de datos dentro de un arreglo
/*const baseDatos = [
    {id:1, equipo:'Millonarios', pais: 'Colombia'},
    {id:2, equipo:'Liverpool', pais: 'Inglaterra'},
    {id:3, equipo:'Cerdos', pais: 'Bolivia'},
    {id:4, equipo:'Nacional', pais: 'Colombia'},
    {id:5, equipo:'Real Madrid', pais: 'España'},
]
*/
export const CrudApp = ()=>{
    // Hook para manejar la base de datos en equipos queda toda la base
    const [equipos, setEquipos] = useState(()=>{
        const saveEquipos = window.localStorage.getItem('equiposData');
        if (saveEquipos) {
            return JSON.parse(saveEquipos);
        }else{
            return [];
        }
    });
    //Useeffect escucha la varable equipos
    useEffect(() => {
        window.localStorage.setItem('equiposData', JSON.stringify(equipos));
    }, [equipos]);
    
    const [editData, setEditData] = useState(null);
    const addEquipos = (equipo) =>{
        setEquipos([...equipos, equipo])
    }
    //fn editar equipos
    const editEquipos = (equipo) =>{
        const newEquipos = equipos.map(el => el.id == equipo.id ? equipo : el)
        setEquipos(newEquipos) //Setea la variable de equipos con el nuevo arreglo y sale en la table
        setEditData(null) // Limpia lo que se iba a editar
    }
    //Funcion para eliminar equipos de acurdo a su id
    const deleteEquipos = (id) =>{
     
        const idDelete = window.confirm(`Desea eliminar el registro con id: ${id}?`);

        if(idDelete){
            const newEquipos = equipos.filter(el => el.id != id)
            setEquipos(newEquipos)
        }
    } 

    return(
        <div>
            <h2>Crud Equipos de futbol</h2>
            {/* Formulario para los datos */}
            <CrudForm addEquipos={addEquipos} editEquipo={editEquipos} editData={editData} />
		    {/* Aqui inserto la variable equipos */}
            <CrudTable equipos={equipos} setEditData={setEditData} deleteEquipos={deleteEquipos} />
        </div>
    )
}
