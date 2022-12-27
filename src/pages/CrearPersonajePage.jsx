import axios from "axios";
import FormPersonajeComponent from "../components/FormPersonaje";
import React from 'react';

function CrearPersonajePage() {

    const crearPersonajePage = ( personaje ) => {
        axios.post( "http://localhost:9090/personaje", personaje )
            .then( res => {
                alert(res.data);
                window.location.reload();
            })
            .catch( err => {
                console.log(err);
            });
    }
    return(
        <div>
            <FormPersonajeComponent
                titulo="Crear Personaje"
                action="crear"
                onSubmit={crearPersonajePage}
            />
        </div>
    );
}

export default CrearPersonajePage;