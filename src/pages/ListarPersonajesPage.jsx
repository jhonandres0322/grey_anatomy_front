import TablaPersonajeComponent from "../components/TablaPersonajes";
import { useEffect, useState } from "react";
import axios from 'axios';


function ListarPersonajesPage() {

    const [ personajes, setPersonajes ] = useState([]);
    const [ filter, setFilter ] = useState("nombre");

    useEffect(() => {
        getPersonajes();
    }, []);

    const getPersonajes = () => {
        axios.get(`http://localhost:9090/personajes/${filter}`)
        .then( (response) => {
            setPersonajes(response.data);
        })
        .catch( (error) => {

        })
    }

    const handlerChangeFilter = (filter) => {
        setPersonajes([]);
        setFilter(filter);
        getPersonajes();
    }
    return (
        <>
            <TablaPersonajeComponent 
                personajes={personajes}
                filter={filter}
                onChangeFilter={handlerChangeFilter}
            /> 
        </>
    );
}

export default ListarPersonajesPage;