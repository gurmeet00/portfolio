import { Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
<>
    <Grid item xs={12} sx={{textAlign:'center',py:2, backgroundImage:'linear-gradient(#7844e9, black)'}}>
<Typography variant='paragraph' sx={{fontWeight:'bold', color:"white",fontFamily:'poppins'}}>Thankyou for taking the time to review my profile!</Typography>
    </Grid>

</>
  )
}

export default Footer