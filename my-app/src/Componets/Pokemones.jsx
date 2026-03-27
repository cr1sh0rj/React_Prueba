import React, {useEffect,useState} from "react"

export const Pokemones = ()=>{
    // Creo variables de estado para guardar los Pokemones
    const [pokemones,setPokemones] = useState([]);
    // Llamamos la API con useEffect
    useEffect(()=>{
        //Resolver las promesas
        async function obtenerPokemones(){
            const response =await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
            //Ver los datos
            //console.log(await response.json());
            const data =await response.json();
            // Guardar los resultados utilizando la funcion setPokemones
            setPokemones(data.results);
        }
        obtenerPokemones();
    }, []);

    return(
        <div>
            <h1>Lista de Pokemones</h1>
            <ul>
                {
                    pokemones.map((pokemon,index)=>{
                        return(
                            <div>
                                <li key={index}><strong> Nombre:</strong> {pokemon.name} <strong>Url:</strong> {pokemon.url}</li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}