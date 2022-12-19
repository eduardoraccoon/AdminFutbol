import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

function Form({ openCloseModal, handleClose, form, setForm, type }) {

    const handleChangeStatus = (e) => {
        setForm({ ...form, status: e.target.value })
    }

    return (
        <>
            <Dialog
                open={openCloseModal}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {type}
                </DialogTitle>

                <DialogContent>

                    <FormControl fullWidth sx={{ p: 1 }}>
                        <TextField

                            id="outlined-basic"
                            label="Nombre"
                            variant="outlined"
                        />
                    </FormControl>

                    <FormControl fullWidth sx={{ p: 1 }}>
                        <InputLabel id="demo-simple-select-label">Estatus</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={form.status}
                            label="Estatus"
                            onChange={handleChangeStatus}
                        >
                            <MenuItem value={1}>Activo</MenuItem>
                            <MenuItem value={2}>Baja</MenuItem>
                        </Select>
                    </FormControl>

                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="primary"
                    >
                        ACEPTAR
                    </Button>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="secondary"
                    >
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Form
