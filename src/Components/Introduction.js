import { Chip, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

function Introduction() {
  return (
<>

<Chip label="INTRODUCE" variant="outlined" sx={{color:"white"}}/>

<Typography sx={{fontSize:{xs:"38px", md:"60px"},fontWeight: 'regular', color:"White", mt:4, fontFamily:"poppins"}}>
Say Hi from <span style={{color:"#7844e9"}}> Gurmeet Singh</span>, Wordpress and Frontend Developer
</Typography>
<p style={{color:"#909090", fontSize:'18px'}}>I design and code beautifully simple things and i love what i do.<br/> Just simple like that!</p>
<Divider/>

<Grid container spcaing={1} sx={{my:{xs:10, md:28}}}>
    <Grid item xs={6}>
    <Typography variant='h2'  style={{fontSize:{xs:"20px", md:"80px"}, color:"#7844e9",  fontWeight:"350",}} >2+</Typography>
<p style={{color:"#909090", fontSize:'16px'}}>YEARS OF EXPERIENCE</p>

    </Grid>
    <Grid item xs={6}>
<Typography variant='h2'  style={{fontSize:{xs:"20px", md:"80px"}, color:"#7844e9",  fontWeight:"350",}} >2+</Typography>
<p style={{color:"#909090", fontSize:'16px'}}>YEARS OF EXPERIENCE</p>

    </Grid>
</Grid>

</>
  )
}

export default Introduction