import { Avatar, Box, Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import '../index.css'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import "./style/all_css.css"
function Profile() {


  return (
    <>
    <Box sx={{ px:"25px", py:"20px",  color:"white",    border:"1px solid #909090",    borderRadius:"15px", position:{xs:"initial", md:'fixed'}, width:{xs:"85  %", md:"20%"}}}>
   <Grid container spacing={1}>
    <Grid item xs={12}>
    <Typography variant={'h3'} sx={{fontWeight:"bold", fontSize:{xs:"40px", md:"45px"} }}>Gurmeet Singh</Typography>
    <Typography paragraph={true} sx={{fontFamily:"Poppins", fontSize:{xs:"15px", md:"17px"}, mt:"12px", color:'#7844e9'}}> Wordpress & Frontend Developer </Typography>
    </Grid>
    <Grid item xs={12} sx={{textAlign:"center", pt:"40px", borderTop:"1px solid  #909090"}}>
    <Avatar src="/profile_pic/gurmeet1.png" alt="profile"  sx={{width:220 , height:220 , mx:'auto' , my:"30px"}}/>
    <Typography va  riant="h5" sx={{ mt:"30px", fontSize:"30px", fontFamily:"poppins"}}>Hi, i am </Typography>
  
      <ul  className='secText'>
      <li><span>Wordpress Developer</span></li>
      <li><span>React Developer</span></li>
      <li><span>Freelancer</span></li>
    </ul>
     <Typography paragraph={true} sx={{fontFamily:"Poppins", fontSize:'15px', mt:"10  px", color:"#909090"}}>Check My Social Media Profiles</Typography>

<Grid container spacing={1}>
<Grid item xs={12}>
   </Grid>
    <Grid item xs={3} >
    <a href="https://www.instagram.com/i_am_gurmeet_/" target="_blank  ">
    <Avatar src="/profile_pic/instagram.png" alt="profile"  sx={{width:40 , height:40, margin:"auto"}}/>
    </a></Grid>
    <Grid item xs={3}>
    <a href="https://www.linkedin.com/in/i-am-gurmeet-singh/" target="_blank  ">
    <Avatar src="/profile_pic/linkedin.png" alt="profile"  sx={{width:40 , height:40, margin:"auto" }} />
    </a>
    </Grid>
    <Grid item xs={3}>
    <a href="#">
    <Avatar src="profile_pic/git.png" alt="profile"  sx={{width:40 , height:40, margin:"auto" }} />
    </a>
    </Grid>
    <Grid item xs={3}>
    <a href="https://stackoverflow.com/users/22783256/gurmeet-singh" target='_blank'>
    <Avatar src="profile_pic/stackoverflow.png" alt="stackoverflow"  sx={{width:40 , height:40, margin:"auto" }} />
    </a>
    </Grid>

</Grid>
<Grid item xs={12} sx={{my:"2px"}}>
<a href='doc/pdf_file.pdf' download>
<Button  className='resumeBtn'><DescriptionOutlinedIcon sx={{mr:1}}/> Check Resume!</Button>
</a>
</Grid>
    </Grid>
   </Grid>
    </Box>
  
    </>)
}

export default Profile