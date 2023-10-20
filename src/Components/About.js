import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Divider, Grid, Typography } from '@mui/material';

function About() {
  return (
  <>
    
    <Grid item xs={12} sx={{my:10}}>
    <Stack direction="row" spacing={1}>
<Chip variant="outlined"
 avatar={<PersonOutlineOutlinedIcon/>} label="About" sx={{color:"white"}}/>
    </Stack>

    <Typography sx={{fontSize:{xs:"24px", md:"45px"},fontWeight: 'regular', color:"White", mt:4, fontFamily:"poppins"}}>
    ABOUT
Every great design begin with
an even <span style={{color:"#7844e9"}}> better story</span>.
</Typography>
<p style={{color:"#909090", fontSize:'18px'}}>Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
<Divider/>
    </Grid>
  </>
  )
}

export default About