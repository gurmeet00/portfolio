import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import '../index.css'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

function Profile() {


  return (
    <>
    <Box sx={{    px:"25px", py:"30px",   color:"white",    border:"1px solid #909090",    borderRadius:"20px", position:{xs:"initial", md:'fixed'}, width:{xs:"90%", md:"20%"}}}>
   <Grid container spacing={1}>
    <Grid item xs={12}>
    <Typography variant={'h3'} sx={{fontWeight:"bold", fontSize:{xs:"40px", md:"45px"} }}>Gurmeet Singh</Typography>
    <Typography paragraph={true} sx={{fontFamily:"Poppins", fontSize:'15px', mt:"12px"}}>( Wordpress & Frontend Developer )</Typography>
    </Grid>
    <Grid item xs={12} sx={{textAlign:"center", pt:"40px", borderTop:"1px solid  #909090"}}>
    <Avatar src="/profile_pic/gurmeet1.png" alt="profile"  sx={{width:300 , height:300 , mx:'auto' , my:"30px"}}/>
    <Typography variant="h4" sx={{ mt:"25px"}}>Hello!
    <br/>
     i am Gurmeet</Typography>
     <Typography paragraph={true} sx={{fontFamily:"Poppins", fontSize:'15px', mt:"12px", color:"#909090"}}>Check My Social Media Profile</Typography>

<Grid container spacing={1}>
    <Grid item xs={6} >
    <Avatar src="/profile_pic/instagram.png" alt="profile"  sx={{width:40 , height:40, float:"right" }}/>
    </Grid>
    <Grid item xs={6}>
    <Avatar src="/profile_pic/linkedin.png" alt="profile"  sx={{width:40 , height:40 ,float:"left"}} />
    </Grid>
</Grid>
<Button style={{margin:"30px 0px 20px 0px",background:"#7844e9", fontFamily:"poppins", fontWeight:'normal',color:"white",  width:'70%'}}><DescriptionOutlinedIcon sx={{mr:1}}/> Check Resume!</Button>
    </Grid>


   </Grid>

    </Box>
  
    </>)
}

export default Profile