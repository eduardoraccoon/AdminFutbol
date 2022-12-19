// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// Components
import HomePage from 'src/components/Index'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <HomePage />
        </Grid>               
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
