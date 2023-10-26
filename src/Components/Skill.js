import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box, Grid, Typography } from '@mui/material';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';


function Skill() {


  return (
  <>
    
    <Grid item xs={12} sx={{my:5}}>
    <Stack direction="row" spacing={1}>
<Chip variant="outlined"
 avatar={<CollectionsOutlinedIcon style={{color:"white"}}/>} label="My Skills" sx={{color:"white"}}/>
    </Stack>

    <Typography sx={{fontSize:{xs:"34px", md:"60px"},fontWeight: 'regular', color:"White", mt:3, fontFamily:"poppins"}}>
    My <span style={{color:"#7844e9"}}>  Perks</span>
</Typography>
<Grid container spacing={4} sx={{my:3}}>
  <Grid item xs={6} md={2.5} > 
  <Box className="logoBox">
  <img src="/profile_pic/wordpress.png" alt="logo" width={80}/>
{/* <Typography className="percentage"  >80%</Typography> */}
</Box>
    <Typography paragraph={true} className="techName" >Wordpress</Typography>

  </Grid>

  <Grid item xs={6} md={2.5} > 
  <Box className="logoBox">
  <img src="/profile_pic/html.png" alt="logo" width={80}/>
</Box>
    <Typography paragraph={true} className="techName" >HTML</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box className="logoBox">
  <img src="/profile_pic/css_.png" alt="logo" width={80}/>
</Box>
    <Typography paragraph={true} className="techName" >CSS</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box className="logoBox">
  <img src="/profile_pic/bootstrap.png" alt="logo" width={80}/>
</Box>
    <Typography paragraph={true} className="techName" >Bootstrap</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box className="logoBox">
  <img src="/profile_pic/js.png" alt="logo" width={80}/>
</Box>
    <Typography paragraph={true} className="techName" >Javascript</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box className="logoBox">
  <img src="/profile_pic/react.png" alt="logo" width={80}/>
</Box>
    <Typography paragraph={true} className="techName" >React</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box className="logoBox">
  <img src="/profile_pic/mui.png" alt="logo" width={80}/>
</Box>
    <Typography paragraph={true} className="techName" >Material UI</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box className="logoBox">
  <img src="/profile_pic/rtk.png" alt="logo" width={80}/>
</Box>
    <Typography paragraph={true} className="techName" >Redux Tool Kit</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box className="logoBox">
  <img src="/profile_pic/git.png" alt="logo" width={80}/>
</Box>
    <Typography paragraph={true} className="techName" >Git</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box className="logoBox">
  <img src="/profile_pic/firebase.png" alt="logo" width={80}/>
</Box>
    <Typography paragraph={true} className="techName" >Firebase</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box className="logoBox">
  <img src="/profile_pic/ps.png" alt="logo" width={80}/>
</Box>
    <Typography paragraph={true} className="techName" >Photoshop</Typography>

  </Grid>
</Grid>
    </Grid>
  </>
  )
}

export default Skill