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
 avatar={<PersonOutlineOutlinedIcon style={{color:"white"}}/>} label="About" sx={{color:"white"}}/>
    </Stack>

    <Typography sx={{fontSize:{xs:"38px", md:"60px"},fontWeight: 'regular', color:"White", mt:4, fontFamily:"poppins"}}>
    On My <span style={{color:"#7844e9"}}> Prossional Path </span>
</Typography>
<p style={{color:"#909090", fontSize:'18px', textAlign:"justify"}}>I want to use my expertise in web development to build eye-catching websites and help you expand your brand, business, and other things. I'm dedicated to producing top-notch work by putting a lot of emphasis on creative design and for better user experience. Based on my past experiences and accomplished endeavors, I am eager to contribute significantly to your group and assist you in achieving success on the Internet.</p>
<Divider/>
    </Grid>
  </>
  )
}

export default About