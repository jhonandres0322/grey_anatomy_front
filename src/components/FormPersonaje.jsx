import { Avatar, Button, Grid, TextField } from "@mui/material";
import {
    makeStyles,
} from "@material-ui/core/styles";
import React, { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));


function FormPersonajeComponent(props) {

    const [ id, setId ] = React.useState(0);
    const [ nombre, setNombre ] = React.useState("");
    const [ cargo, setCargo ] = React.useState("");
    const [ imagen, setImagen ] = React.useState("");
    const [ descripcion, setDescripcion ] = React.useState("");
    const [ episodios, setEpisodios ] = React.useState([]);

    useEffect(() => {
        if (props.personaje) {
            setId(props.personaje.id);
            setNombre(props.personaje.nombre);
            setCargo(props.personaje.rol);
            setImagen(props.personaje.imagen);
            setDescripcion(props.personaje.descripcion);
            setEpisodios(props.personaje.episodios);
        }
    }, [props.personaje]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const personajeCreado = {
            id: id,
            nombre: nombre,
            rol: cargo,
            imagen: imagen,
            descripcion: descripcion,
            episodios: episodios,
        }
        props.onSubmit(personajeCreado);
    };
    const classes = useStyles();
    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <h1> {props.titulo} </h1>
                    <Avatar
                        alt="Remy Sharp" 
                        src={imagen} 
                        sx={{ width: 150, height: 150 }}
                    />
                    <form 
                        className={classes.root}
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            label="Nombre"
                            variant="filled"
                            required
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                        <TextField
                            label="Cargo"
                            variant="filled"
                            required
                            value={cargo}
                            onChange={e => setCargo(e.target.value)}
                        />
                        <TextField
                            label="URL de la imagen"
                            variant="filled"
                            required
                            value={imagen}
                            onChange={e => setImagen(e.target.value)}
                        />
                        <TextField
                            label="Descripción"
                            variant="filled"
                            required
                            maxRows={4}
                            multiline
                            value={descripcion}
                            onChange={e => setDescripcion(e.target.value)}
                        />
                        <TextField
                            label="Episodios"
                            variant="filled"
                            required
                            value={episodios}
                            onChange={e => setEpisodios(e.target.value)}
                        />
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color={
                                props.action === "crear" 
                                ? "success" 
                                : "warning"
                            }
                        >
                            {
                                props.action === "crear" 
                                ? "Crear" 
                                : "Actualizar"
                            }
                        </Button>
                    </form>
                </Grid>

            </Grid>
        </>
    );
}

export default FormPersonajeComponent;