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

 
    return (
        <>
            <Card sx={{ position: 'relative' }}>
                <CardContent>

                    <TextField
                        id="nickname"
                        name="nickname"
                        label="Nickname"
                        size="small"
                    />
                  
                </CardContent>
            </Card>
        </>
    )
}

export default HomePage