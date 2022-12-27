import { Dialog, DialogContent } from "@mui/material";
import FormPersonajeComponent from "./FormPersonaje";
import axios from 'axios';



function ModalEditPersonajeComponent(props) {

    const actualizarPersonaje = ( personaje ) => {
        console.log('personaje', personaje);
        axios.put( `http://localhost:9090/personaje/${personaje.id}`, personaje )
            .then( res => {
                alert(res.data);
                window.location.reload();
            })
            .catch( err => {
                console.log(err);
            });
    }


    return(
        <>
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
                <DialogContent>
                    <FormPersonajeComponent
                        titulo="Editar Personaje"
                        onSubmit={actualizarPersonaje}
                        personaje={props.personaje}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
}


export default ModalEditPersonajeComponent;