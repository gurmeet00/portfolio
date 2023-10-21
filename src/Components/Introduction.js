import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import SouthIcon from '@mui/icons-material/South';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


function Introduction() {
  return (
<>
<Stack direction="row" spacing={1}>
<Chip variant="outlined"
 avatar={<HomeOutlinedIcon/>} label="INTRODUCE" sx={{color:"white"}}/>
    </Stack>
<Typography sx={{fontSize:{xs:"38px", md:"60px"},fontWeight: 'regular', color:"White", mt:4, fontFamily:"poppins"}}>
Say Hi from <span style={{color:"#7844e9"}}> Gurmeet Singh</span>, Wordpress and Frontend Developer
</Typography>
<p style={{color:"#909090", fontSize:'18px'}}>I design and code beautifully simple things and i love what i do.<br/> Just simple like that!</p>
<Divider/>

<Grid container spcaing={1} sx={{my:{xs:10, md:10}}}>
<Grid item xs={12} md={11} sx={{textAlign:"right",mb:5}}> 
<Box sx={{position:'relative'}}>
  <img src="/profile_pic/round-text.png" alt="round_img"  style={{animation: "rotation 2s infinite linear;"}}/>
<SouthIcon sx={{color:"white",fontSize:"40px  ", position:"absolute", top:'50px', right:"52px", }}/>

</Box>

</Grid>
    <Grid item xs={6} md={4}>
    <Typography variant='h2'  style={{fontSize:{xs:"20px", md:"80px"}, color:"#7844e9",  fontWeight:"350",}} >2+</Typography>
<p style={{color:"#909090", fontSize:'16px'}}>YEARS OF EXPERIENCE</p>

    </Grid>
    <Grid item xs={6} md={4}>
<Typography variant='h2'  style={{fontSize:{xs:"20px", md:"80px"}, color:"#7844e9",  fontWeight:"350",}} >2+</Typography>
<p style={{color:"#909090", fontSize:'16px'}}>YEARS OF EXPERIENCE</p>

    </Grid>


</Grid>


</>
  )
}

export default Introduction