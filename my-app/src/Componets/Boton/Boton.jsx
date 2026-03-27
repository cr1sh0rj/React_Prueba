import './Boton.css'

export const Boton = (params) => {        
    const {texto,clase}= params 
    return(
        <button className={clase}>{texto}</button>
    )
}