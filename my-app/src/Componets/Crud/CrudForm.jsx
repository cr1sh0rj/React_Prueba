import { useState } from "react";

export const CrudForm = ({ addEquipos })=>{
    const [formData, setFormData] = useState({equipo: '', pais: '',id : null});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.equipo !== '' && formData.pais !== ''){
            formData.id = Date.now();
            addEquipos(formData);
            setFormData({equipo: '', pais: '', id: null});
        }else{
            alert('Datos incompletos, porfavor de escribir el equipo y el pais');
            return;
        }
    };
   
    return(
        <div>
            <form className="m-3" onSubmit={handleSubmit}>
                <label htmlFor="equipo">Equipo:</label>
                <input type="text" name="equipo" value={formData.equipo} onChange={handleChange} />
                
                <label htmlFor="pais">Pais:</label>
                <input type="text" name="pais" value={formData.pais} onChange={handleChange} />
                
                <input type="submit" value="Agregar" /*className="btn btn-success mx-2"*/ />
                <input type="reset" value="Cancelar" /*className="btn btn-secondary mx-2"*/ />
            </form>
        </div>
    )
}