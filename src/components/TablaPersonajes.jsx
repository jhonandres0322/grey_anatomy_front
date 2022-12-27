import { Visibility } from "@mui/icons-material";
import { FormControl, Grid, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow, useTheme } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import React from 'react';
import ModalVerPersonajeComponent from "./ModalVerPersonaje";


function TablePaginationActions( props ) {
    const theme = useTheme();
    const {
        count,
        page,
        rowsPerPage,
        onPageChange
    } = props;

    const handleFirstPageButtonClick = ( event ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = ( event ) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = ( event ) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = ( event ) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
    
    return (
        <div>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

function TablaPersonajeComponent( props) {

    const [ page, setPage] = React.useState(0);
    const [ rowsPerPage, setRowsPerPage] = React.useState(5);
    const [ openModal, setOpenModal ] = React.useState(false);
    const [ personajeSeleccionado, setPersonajeSeleccionado ] = React.useState({
        id: '',
        nombre: '',
        rol: '',
        episodios: 0,
        descripcion: '',
        imagen: ''
    });

    const handleChangePage = ( event, newPage ) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleOpenModal = ( personajeSeleccionado ) => {
        console.log('personajeSeleccionado', personajeSeleccionado);
        setPersonajeSeleccionado(personajeSeleccionado);
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setPersonajeSeleccionado({});
        setOpenModal(false);
    }

    return (
        <>
            <Grid 
                container
                justify="center"
                style={{ padding: "5%", marginTop:"2%" }}
                spacing={2}
            >
                <h1>
                    Listado de Personajes
                </h1>
                <Grid
                    style={{ width: "100%" }}
                >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={props.filter}
                                label="Ordenar por"
                                onChange={e => props.onChangeFilter(e.target.value)}
                            >
                                <MenuItem value={"date"}>Por Fecha de Creación</MenuItem>
                                <MenuItem value={"nombre"}>Por Nombre</MenuItem>
                            </Select>
                    </FormControl>
                </Grid>
                <Table
                    border={1}
                    style={{ width: "100%" }}
                    
                >
                    <TableHead>
                        <TableRow>
                            <TableCell > Nombre </TableCell>
                            <TableCell align="right"> Cargo</TableCell>
                            <TableCell align="right"> Acción </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                        props.personajes
                        .slice( 
                            page * rowsPerPage, page * rowsPerPage + rowsPerPage
                        )
                        .map((personaje) => (
                            <TableRow
                                key={personaje.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {personaje.nombre}
                                </TableCell>
                                <TableCell align="right">{personaje.rol}</TableCell>
                                <TableCell align="right">
                                    <IconButton color="info" aria-label="upload picture" component="label">
                                        <Visibility 
                                            onClick={ () => handleOpenModal(personaje)}
                                        />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            colSpan={3}
                            count={props.personajes.length}
                            rowsPerPage={ rowsPerPage }
                            page={ page }
                            SelectProps={{
                                inputProps: { "aria-label": "rows per page" },
                                native: true,
                            }}
                            ActionsComponent={TablePaginationActions}
                            onPageChange={ handleChangePage}
                            onRowsPerPageChange={ handleChangeRowsPerPage }
                            labelRowsPerPage="Filas por página"
                        ></TablePagination>
                    </TableFooter>
                </Table>
            </Grid>
            <ModalVerPersonajeComponent
                open={openModal}
                onClose={handleCloseModal}
                personaje={personajeSeleccionado}
            />
        </>
    );
}

export default TablaPersonajeComponent;