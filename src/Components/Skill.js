import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box, Grid, Typography } from '@mui/material';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';


function Skill() {
const logoBox={
  border:"1px solid #6E6E6E",
   padding:"20px", 
   textAlign:"center", 
   borderRadius:"10% "
}
const percentage={
  fontSize:"40px",
  color:"#7844e9", 
  marginTop:"10px",
  fontFamily:"sans-serif"
}

const techName={
textAlign:"center", 
    color:"white",
    fontSize:"14px",
    marginTop:"10px"

}
  return (
  <>
    
    <Grid item xs={12} sx={{my:10}}>
    <Stack direction="row" spacing={1}>
<Chip variant="outlined"
 avatar={<CollectionsOutlinedIcon/>} label="My Skills" sx={{color:"white"}}/>
    </Stack>

    <Typography sx={{fontSize:{xs:"24px", md:"45px"},fontWeight: 'regular', color:"White", mt:4, fontFamily:"poppins"}}>
    My <span style={{color:"#7844e9"}}>  Advantages</span>
</Typography>
<Grid container spacing={4} sx={{my:3}}>
  <Grid item xs={6} md={2.5} > 
  <Box style={logoBox}>
  <img src="/profile_pic/wordpress.png" alt="logo" width={90}/>
<Typography style={percentage}  >80%</Typography>
</Box>
    <Typography paragraph={true} style={techName} >Wordpress</Typography>

  </Grid>

  <Grid item xs={6} md={2.5} > 
  <Box style={logoBox}>
  <img src="/profile_pic/html.png" alt="logo" width={90}/>
<Typography style={percentage}  >90%</Typography>
</Box>
    <Typography paragraph={true} style={techName} >HTML</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box style={logoBox}>
  <img src="/profile_pic/css_.png" alt="logo" width={90}/>
<Typography style={percentage}  >80%</Typography>
</Box>
    <Typography paragraph={true} style={techName} >CSS</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box style={logoBox}>
  <img src="/profile_pic/bootstrap.png" alt="logo" width={90}/>
<Typography style={percentage}  >85%</Typography>
</Box>
    <Typography paragraph={true} style={techName} >Bootstrap</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box style={logoBox}>
  <img src="/profile_pic/js.png" alt="logo" width={90}/>
<Typography style={percentage}  >80%</Typography>
</Box>
    <Typography paragraph={true} style={techName} >Javascript</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box style={logoBox}>
  <img src="/profile_pic/react.png" alt="logo" width={90}/>
<Typography style={percentage}  >80%</Typography>
</Box>
    <Typography paragraph={true} style={techName} >React</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box style={logoBox}>
  <img src="/profile_pic/mui.png" alt="logo" width={90}/>
<Typography style={percentage}  >80%</Typography>
</Box>
    <Typography paragraph={true} style={techName} >Material UI</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box style={logoBox}>
  <img src="/profile_pic/rtk.png" alt="logo" width={90}/>
<Typography style={percentage}  >80%</Typography>
</Box>
    <Typography paragraph={true} style={techName} >Redux Tool Kit</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box style={logoBox}>
  <img src="/profile_pic/git.png" alt="logo" width={90}/>
<Typography style={percentage}  >80%</Typography>
</Box>
    <Typography paragraph={true} style={techName} >Git</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box style={logoBox}>
  <img src="/profile_pic/firebase.png" alt="logo" width={90}/>
<Typography style={percentage}  >80%</Typography>
</Box>
    <Typography paragraph={true} style={techName} >Firebase</Typography>

  </Grid>
  <Grid item xs={6} md={2.5} > 
  <Box style={logoBox}>
  <img src="/profile_pic/ps.png" alt="logo" width={90}/>
<Typography style={percentage}  >30%</Typography>
</Box>
    <Typography paragraph={true} style={techName} >Photoshop</Typography>

  </Grid>
</Grid>
    </Grid>
  </>
  )
}

export default Skill