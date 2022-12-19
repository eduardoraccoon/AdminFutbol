import React, { useState, useEffect } from 'react'

// Components MUI
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import { GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Chip from '@mui/material/Chip';

import axios from 'axios';
import Snackbar from '../snackbar';
import Form from './form';

const intialStateForm = {
    name: "",
    status: ""
}

const initalData = [
    {
        id: 1,
        nombre: "Cancún FC",
        estatus: 1
    },
    {
        id: 2,
        nombre: "Bokoba",
        estatus: 2
    }
]

function IndexEquipos() {

    const [data, setData] = useState(initalData);
    const [openCloseModal, setOpenCloseModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState("");
    const [form, setForm] = useState(intialStateForm)

    // useEffect(() => {
    //     axios
    //     .get('https://localhost:7132/api/Equipos/lista')
    //     .then(resp => setData(resp))
    // }, [])


    const handleOpenModalAdd = (params) => {
        setType("Agregar");
        setOpenCloseModal(true);
    }

    const handleOpenModalEdit = (params) => {
        setType("Editar");
        setOpenCloseModal(true);
    }

    const handleClose = () => {
        setOpenCloseModal(false);
    }

    const handleAction = (params) => {
        return (
            <>
                <IconButton
                    onClick={() => handleOpenModalEdit(params)}
                    aria-label="info"
                    color='info'
                >
                    <EditIcon />
                </IconButton>
            </>
        )
    }

    const estatus = (params) => {
        return (
            <>
                <Chip
                    label={params.row.estatus === 1 ? "Activo" : "Baja"}
                    color={params.row.estatus === 1 ? "success" : "error"}
                    variant="outlined"
                />
            </>
        )
    }

    const columns = [
        {
            field: 'id',
            headerName: '#',
            flex: 1
        },
        {
            field: 'nombre',
            headerName: 'Nombre',
            flex: 1
        },
        {
            field: 'fk_id_encargado',
            headerName: 'Encargado',
            type: 'number',
            flex: 1
        },
        {
            field: 'estatus',
            headerName: 'Estatus',
            renderCell: estatus,
            flex: 1
        },
        {
            field: 'info',
            headerName: 'Acciones',
            renderCell: handleAction,
            flex: 1
        },
    ];

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleOpenModalAdd}
                >
                    Agregar
                </Button>
                <GridToolbarFilterButton />
            </GridToolbarContainer>
        );
    }

    return (
        <>
            <Paper >
                <DataGrid
                    autoHeight
                    rows={data}
                    columns={columns}
                    loading={loading}
                    components={{
                        Toolbar: CustomToolbar,
                    }}
                />
            </Paper>

            <Form
                openCloseModal={openCloseModal}
                handleClose={handleClose}
                form={form}
                setForm={setForm}
                type={type}
            />
        </>
    )
}

export default IndexEquipos