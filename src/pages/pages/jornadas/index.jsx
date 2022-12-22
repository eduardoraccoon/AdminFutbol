import React from 'react';
import Button from '@mui/material/Button';
import  Grid  from '@mui/material/Grid';
import  Typography  from '@mui/material/Typography';
import  Card  from '@mui/material/Card';
import JornadasPage from 'src/components/jornadas';

function index() {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h5'>
            Jornadas
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <JornadasPage />
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default index
