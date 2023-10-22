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
    About <span style={{color:"#7844e9"}}> My Career Path</span>
</Typography>
<p style={{color:"#909090", fontSize:'18px'}}>"I aim to utilize my web development skills to create impressive websites and contribute to your company's growth. With a strong focus on user experience and innovative design, I'm committed to delivering quality results. Drawing from my experience and successful projects, I'm excited to be a valuable asset to your team and help you achieve online success."</p>
<Divider/>
    </Grid>
  </>
  )
}

export default About