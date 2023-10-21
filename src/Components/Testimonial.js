import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Divider, Grid } from '@mui/material';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import Typography from '@mui/material/Typography';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

function Testimonial() {
  return (
  <>
    
    <Grid item xs={12} sx={{my:10}}>
    <Stack direction="row" spacing={1}>
<Chip variant="outlined"
 avatar={<ChatOutlinedIcon/>} label="Testimonials" sx={{color:"white"}}/>
    </Stack>

    <Typography sx={{fontSize:{xs:"24px", md:"45px"},fontWeight: 'regular', color:"White", mt:4, fontFamily:"poppins"}}>

    Trusted by  <span style={{color:"#7844e9"}}>Hundered Clients</span>.
</Typography>
<p style={{color:"#909090", fontSize:'18px'}}>Since beginning my journey as a freelance designer nearly 8 years ago. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
<Divider/>
    </Grid>
  </>
  )
}

export default Testimonial