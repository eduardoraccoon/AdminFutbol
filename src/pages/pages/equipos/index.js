import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import IndexEquipos from 'src/components/equipos'

function HomeEquipos() {

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h5'>
            Equipos
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <IndexEquipos />
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default HomeEquipos