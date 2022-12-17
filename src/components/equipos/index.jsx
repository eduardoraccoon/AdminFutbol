import React, { useState, useEffect } from 'react'

// Components MUI
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import axios from 'axios';
import Snackbar from '../snackbar';

function IndexEquipos() {

    const [data, setData] = useState([]);
    const [openCloseModal, setOpenCloseModal] = useState(false);
    const [select, setSelect] = useState();
    const [pokemons, setPokemons] = useState();

    useEffect(() => {
        axios
        .get('https://localhost:7132/api/Equipos/lista')
        .then(resp => setData(resp))
    }, [])


    const handleOpenModal = (params) => {
        setOpenCloseModal(true);
        setSelect(params.row);
    }

    const handleClose = () => {
        setOpenCloseModal(false);
    }

    const handleAction = (params) => {
        return (
            <>
                <IconButton
                    onClick={() => handleOpenModal(params)}
                    aria-label="info"
                    color='info'
                >
                    <InfoIcon />
                </IconButton>
            </>
        )
    }

    const columns = [
        {
            field: 'id',
            headerName: '#',
        },
        {
            field: 'nombre',
            headerName: 'Nombre',
        },
        {
            field: 'fk_id_encargado',
            headerName: 'Encargado',
            type: 'number'
        },
        {
            field: 'estatus',
            headerName: 'Estatus',
            type: 'number'
        },
        {
            field: 'info',
            headerName: 'Acciones',
            renderCell: handleAction
        },
    ];

    return (
        <>
            <Paper >
                <DataGrid
                    autoHeight
                    rows={data}
                    columns={columns}
                />
            </Paper>

            <Dialog
                open={openCloseModal}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {
                    select && (
                        <DialogTitle id="alert-dialog-title">
                            {select.name}
                        </DialogTitle>
                    )
                }

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {
                            pokemons &&
                            select && (
                                <>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} md={6} sm={6}>
                                            <Card>
                                                <CardHeader
                                                    title={pokemons[Number(select.number_poke1) - 1].name}
                                                />
                                                <CardMedia
                                                    component="img"
                                                    height="100"
                                                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Number(select.number_poke1)}.svg`}
                                                    alt={Number(select.number_poke1)}
                                                />
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12} md={6} sm={6}>
                                            <Card>
                                                <CardHeader
                                                    title={pokemons[Number(select.number_poke2) - 1].name}
                                                />
                                                <CardMedia
                                                    component="img"
                                                    height="100"
                                                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Number(select.number_poke2)}.svg`}
                                                    alt={Number(select.number_poke2)}
                                                />
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12} md={6} sm={6}>
                                            <Card>
                                                <CardHeader
                                                    title={pokemons[Number(select.number_poke3) - 1].name}
                                                />
                                                <CardMedia
                                                    component="img"
                                                    height="100"
                                                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Number(select.number_poke3)}.svg`}
                                                    alt={Number(select.number_poke3)}
                                                />
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12} md={6} sm={6}>
                                            <Card>
                                                <CardHeader
                                                    title={pokemons[Number(select.number_poke4) - 1].name}
                                                />
                                                <CardMedia
                                                    component="img"
                                                    height="100"
                                                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Number(select.number_poke4)}.svg`}
                                                    alt={Number(select.number_poke4)}
                                                />
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12} md={6} sm={6}>
                                            <Card>
                                                <CardHeader
                                                    title={pokemons[Number(select.number_poke5) - 1].name}
                                                />
                                                <CardMedia
                                                    component="img"
                                                    height="100"
                                                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Number(select.number_poke5)}.svg`}
                                                    alt={Number(select.number_poke5)}
                                                />
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12} md={6} sm={6}>
                                            <Card>
                                                <CardHeader
                                                    title={pokemons[Number(select.number_poke6) - 1].name}
                                                />
                                                <CardMedia
                                                    component="img"
                                                    height="100"
                                                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Number(select.number_poke6)}.svg`}
                                                    alt={Number(select.number_poke6)}
                                                />
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </>
                            )
                        }

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="primary">
                        ACEPTAR
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default IndexEquipos