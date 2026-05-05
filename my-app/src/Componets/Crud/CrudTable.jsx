import React from "react";
export const CrudTable = ({equipos, setEditData, deleteEquipos})=>{
    return(
        <div>
            <h2>Equipos Actuales</h2>
            <table border='1'>
                <tr>                
                    <td>#</td>
                    <td>Equipo</td>
                    <td>Pais</td>
                    <td></td>                    
                </tr>
                {
                    equipos.length == 0 ? <td>No hay equipos</td>
                    : equipos.map((equipo,index)=>{
                            return(                                
                                    <tr key={index}>
                                        <td>{equipo.id}</td>
                                        <td align="left">{equipo.equipo}</td>
                                        <td align="left">{equipo.pais}</td>
                                        <td><button className="btn btn-warning mx-2" onClick={() => setEditData(equipo)}>Editar</button>
                                        </td>
                                        <td><button  className="btn btn-danger mx-2" onClick={() => deleteEquipos(equipo.id)}>Eliminar</button>
                                        </td>
                                    </tr>
                                
                                    )
                        })
                }
            </table>
        </div>
    )
}
