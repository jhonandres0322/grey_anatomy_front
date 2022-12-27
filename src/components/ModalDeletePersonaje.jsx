import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';



function ModalDeletePersonajeComponent(props) {

    const deletePersonaje = (idPersonaje) => {
        console.log("idPersonaje: ", idPersonaje);
        axios.delete("http://localhost:9090/personaje/" + idPersonaje)
        .then( (response) => {
            props.onClose();
            alert( response.data );
            window.location.reload();
        }
        )
        .catch( (error) => {
            console.log("error: ", error);
        })
    }
    return (
        <Dialog
            open={props.open}
            keepMounted
            onClose={props.onClose}
            aria-describedby="alert-dialog-slide-description"
            className={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <DialogTitle>
                Eliminar Personaje
            </DialogTitle>
            <DialogContent>
                <Typography gutterBottom variant="h5" component="div">
                    ¿Está seguro que desea eliminar el personaje {props.personaje.nombre}?
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={props.onClose}>Cancelar</Button>
                <Button color="error" onClick={() => deletePersonaje(props.personaje.id)}>Eliminar</Button>
            </DialogActions>
        </Dialog>
    )

}

export default ModalDeletePersonajeComponent;