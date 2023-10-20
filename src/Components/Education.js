import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Divider, Grid, Typography } from '@mui/material';

function Education() {
    const years={
        color:"white",
        fontSize:"14px",
        marginTop:"10px"
    }
    const studyTitle={
        color:"white",
        fontFamily:"poppins",
fontSize:"30px"
    }
    const schoolName={
        color:'grey',
        fontSize:"14px",
        marginTop:"6px"

    }
  return (
  <>
    
    <Grid item xs={12} sx={{my:10}}>
    <Stack direction="row" spacing={1}>
<Chip variant="outlined"
 avatar={<PersonOutlineOutlinedIcon/>} label="Education" sx={{color:"white"}}/>
    </Stack>

    <Typography sx={{fontSize:{xs:"24px", md:"45px"},fontWeight: 'regular', color:"White", mt:4, fontFamily:"poppins"}}>
 
Education  & <span style={{color:"#7844e9"}}>  Experience</span>.
</Typography>

<Grid container spacing={5} sx={{my:1}}>
    <Grid item xs={1} >
    <Typography sx={{fontSize:"30px"  , color:"white"}}>1.</Typography>
    </Grid>
    <Grid item xs={11} >
    <Typography paragraph={true} style={years} >2020 - Present</Typography>
    <Typography variant={'h5'} style={studyTitle} >12th     </Typography>

<Typography paragraph={true} style={schoolName} >Govt.model.sen.sec.school,  Model Town Ludhiana, Punjab, India</Typography>
    
    </Grid>
        <Divider/>
    <Grid item xs={1} >
    <Typography sx={{fontSize:"30px"  , color:"white"}}>2.</Typography>
    </Grid>
    <Grid item xs={11} >
    <Typography paragraph={true} style={years} >2020 - Present</Typography>
    <Typography variant={'h5'} style={studyTitle} >Web Development Course</Typography>

<Typography paragraph={true} style={schoolName} >Govt.model.sen.sec.school,  Model Town Ludhiana, Punjab, India</Typography>
    
    </Grid>
    <Grid item xs={1} >
    <Typography sx={{fontSize:"30px"  , color:"white"}}>3.</Typography>
    </Grid>
    <Grid item xs={11} >
    <Typography paragraph={true} style={years} >2020 - Present</Typography>
    <Typography variant={'h5'} style={studyTitle} >Pursing - BSC.IT</Typography>

<Typography paragraph={true} style={schoolName} >Govt.model.sen.sec.school,  Model Town Ludhiana, Punjab, India</Typography>
    
    </Grid>
    
</Grid>
    </Grid>
    
  </>
  )
}

export default Education