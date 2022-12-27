import { Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, CardActionArea, DialogTitle, Typography, Avatar } from "@mui/material";
import React from 'react';
import ModalDeletePersonajeComponent from "./ModalDeletePersonaje";
import ModalEditPersonajeComponent from "./ModalEditPersonaje";

function ModalVerPersonajeComponent(props) {

    const [ openModalDelete, setOpenModalDelete ] = React.useState(false);
    const [ openModalEdit, setOpenModalEdit ] = React.useState(false);

    const handlerOpenModalDelete = () => {
        setOpenModalDelete(true);
    }

    const handlerCloseModalDelete = () => {
        setOpenModalDelete(false);
    }

    const handlerOpenModalEdit = () => {
        setOpenModalEdit(true);
    }

    const handlerCloseModalEdit = () => {
        setOpenModalEdit(false);
    }

    return (
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
                <DialogTitle>
                    { props.personaje.nombre } - Episodios { props.personaje.episodios}
                </DialogTitle>
                <DialogContent>
                    <Card sx={{ maxWidth: 345 }} >
                        <CardActionArea>
                            <CardMedia>
                            <Avatar 
                                alt="Remy Sharp" 
                                src={props.personaje.imagen} 
                                sx={{ width: 150, height: 150 }}
                            />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cargo: { props.personaje.rol }
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    { props.personaje.descripcion }
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={handlerOpenModalDelete}>Eliminar</Button>
                    <Button color="warning" onClick={handlerOpenModalEdit}>Editar</Button>
                </DialogActions>
            </Dialog>
            <ModalDeletePersonajeComponent
                open={openModalDelete}
                onClose={handlerCloseModalDelete}
                personaje={props.personaje}
            />
            <ModalEditPersonajeComponent 
                open={openModalEdit}
                onClose={handlerCloseModalEdit}
                personaje={props.personaje}
            />
        </>
    );
}


export default ModalVerPersonajeComponent;