import { Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
<>
    <Grid item xs={12} sx={{textAlign:'center',py:2, borderTop:'1px solid #909090'}}>
<Typography variant='paragraph' sx={{ color:"white",fontFamily:'poppins'}}>Thankyou for taking the time to review my profile!</Typography>
    </Grid>

</>
  )
}

export default Footer