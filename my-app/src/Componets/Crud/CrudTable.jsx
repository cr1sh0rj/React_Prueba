export const CrudTable = ({equipos})=>{
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
                                        <td>{equipo.equipo}</td>
                                        <td>{equipo.pais}</td>
                                        <td><button className="btn btn-primary mx-2">Editar</button></td>
                                        <td><button className="btn btn-danger mx-2">Eliminar</button></td>
                                    </tr>
                                
                                    )
                        })
                }
            </table>
        </div>
    )
}
