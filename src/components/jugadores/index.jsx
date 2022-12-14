import React, { useEffect, useState } from 'react';

// Components MUI
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Components 
import SimpleSnackbar from '../snackbar';

import axios from 'axios';

function HomePage() {

    const [pokemons, setPokemons] = useState();
    const [arrPokemons, setArrPokemons] = useState([]);
    const [nickname, setNickname] = useState();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=150")
            .then(resp => setPokemons(resp.data.results))
    }, []);

    const handleChangeCB = (event) => {
        event.target.checked ? (
            setArrPokemons([...arrPokemons, event.target.value])
        ) : (
            setArrPokemons(arrPokemons.filter(item => event.target.value != item))
        )
    }

    const handleChangeT = (event) => {
        setNickname(event.target.value)
    }

    const handleSubmit = () => {
        let formData = new FormData();

        formData.append('name', nickname);
        formData.append('number_poke1', arrPokemons[0]);
        formData.append('number_poke2', arrPokemons[1]);
        formData.append('number_poke3', arrPokemons[2]);
        formData.append('number_poke4', arrPokemons[3]);
        formData.append('number_poke5', arrPokemons[4]);
        formData.append('number_poke6', arrPokemons[5]);


        arrPokemons.length == 6 ? (
            nickname.length < 200 ? (
                axios
                    .post('http://127.0.0.1:8000/api/add', formData)
                    .then(resp => {
                        setMessage("Agregado con éxito"),
                            setOpen(true)
                    })                
            ) : (
                setMessage("El nickname debe ser menor a 200 caracteres"),
                setOpen(true)
            )
        ) : (
            setMessage("Seleccione 6 pokemons"),
            setOpen(true)
        )
    }

    return (
        <>
            <Card sx={{ position: 'relative' }}>
                <CardContent>

                    <TextField
                        id="nickname"
                        name="nickname"
                        label="Nickname"
                        size="small"
                        onChange={handleChangeT}
                    />

                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleSubmit}
                    >
                        AGREGAR
                    </Button>

                    <Grid container spacing={2}>
                        {
                            pokemons &&
                            pokemons.map((item, index) => (
                                <>
                                    <Grid item xs={12} md={3} sm={6}>
                                        <Card sx={{ maxWidth: 300, position: 'relative' }}>
                                            <CardHeader
                                                avatar={
                                                    <IconButton aria-label="add to favorites">
                                                        <Checkbox
                                                            value={index + 1}
                                                            onChange={handleChangeCB}
                                                            icon={<FavoriteBorder />}
                                                            checkedIcon={<Favorite />}
                                                        />
                                                    </IconButton>
                                                }
                                                title={item.name.toUpperCase()}
                                            />
                                            <CardMedia
                                                component="img"
                                                height="190"
                                                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`}
                                                alt={item.name}
                                            />
                                        </Card>
                                    </Grid>
                                </>
                            ))
                        }
                    </Grid>
                </CardContent>
            </Card>

            <SimpleSnackbar
                open={open}
                setOpen={setOpen}
                message={message}
            />
        </>
    )
}

export default HomePage