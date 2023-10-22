import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {  Grid, Typography } from '@mui/material';
import './style/all_css.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';  

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Grid container spacing={4} sx={{ px: 6, py:2}}>
            {children}
          </Grid>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

function Education() {
  
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
  <>
    
    <Grid item xs={12} sx={{my:10}}>
    <Stack direction="row" spacing={1}>
<Chip variant="outlined"
 avatar={<HomeRepairServiceIcon/>} label="Study & Work" sx={{color:"white"}}/>
    </Stack>

    <Typography className='colored' sx={{fontSize:{xs:"24px",color:"white", md:"45px"},color:"",fontWeight: 'regular', mt:4, fontFamily:"poppins"}}>
 
Education  & <span style={{color:"#7844e9"}}>  Experience</span>
</Typography>



<Grid item xs={12} sx={{mt:5}}>
<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Education"  sx={{color:"white", border:"1px solid grey", borderRadius:"10px 10px 0px 0px"}}  {...a11yProps(0)} />
          <Tab label="Experience" sx={{color:"white", border:"1px solid grey", borderRadius:"10px 10px 0px 0px"}}   {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
<Grid container spacing={5} sx={{my:4}}>
<Grid item xs={12}  className="pointsBoxes" >
<Grid container spacing={5} >
    <Grid item xs={1}  >
    <Typography sx={{fontSize:"30px"  , color:"white"}}>1.</Typography>
    </Grid>
    <Grid item xs={11} >
    <Typography paragraph={true} className="years" >20 - 20 Years</Typography>
    <Typography variant={'h5'} className="studyTitle" >Passed - 12th     </Typography>

<Typography paragraph={true} className="schoolName" >Govt.model.sen.sec.school,  Model Town Ludhiana, Punjab, India</Typography>
    
    </Grid>
    </Grid>
    </Grid>

    <Grid item xs={12 }  className="pointsBoxes">
<Grid container spacing={5} >
    <Grid item xs={1}  >
    <Typography sx={{fontSize:"30px"  , color:"white"}}>2.</Typography>
    </Grid>
    <Grid item xs={11}  >
    <Typography paragraph={true} className="years" >2021</Typography>
    <Typography variant={'h5'} className="studyTitle" >Web development Course    </Typography>

<Typography paragraph={true} className="schoolName" >G.N.D.E.COLLEGE (science & technology entrepreneurs’) , Ludhiana</Typography>
    
    </Grid>
    </Grid>
    </Grid>
    <Grid item xs={12 } className="pointsBoxes">
<Grid container spacing={5} >
    <Grid item xs={1}  >
    <Typography sx={{fontSize:"30px"  , color:"white"}}>3.</Typography>
    </Grid>
    <Grid item xs={11}  >
    <Typography paragraph={true} className="years" >2021 - 2024 </Typography>
    <Typography variant={'h5'} className="studyTitle" >    Currently pursuing BSC.IT </Typography>

<Typography paragraph={true} className="schoolName" > Lovely Professional University ,  Jalandhar - Delhi G.T. Road, Phagwara, Punjab (India),</Typography>
    
    </Grid>
    </Grid>
    </Grid>  
    
</Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>

      <Grid container spacing={5} sx={{my:4}}>

<Grid item xs={12 } className="pointsBoxes">
<Grid container spacing={5} >
<Grid item xs={1}  >
<Typography sx={{fontSize:"30px"  , color:"white"}}>1.</Typography>
</Grid>
<Grid item xs={11}  >
<Typography paragraph={true} className="years" >2021 - 2022 </Typography>
<Typography variant={'h5'} className="studyTitle" >   Wordpress Developer </Typography>

<Typography paragraph={true} className="schoolName" > Rocky Mountain Technologies India Pvt. Ltd</Typography>

<Typography paragraph={true} className="schoolName" > "I worked for a year at Rocky Mountain Technologies India Pvt. Ltd. as a WordPress developer. During this time, I learned a lot about creating creative websites using WordPress. I had the chance to build more than 20 websites, each with its unique design and features.
This experience has strengthened my WordPress skills and creativity, making me a valuable asset in web development."</Typography>


</Grid>
</Grid>
</Grid> 

  <Grid item xs={12 } className="pointsBoxes">
<Grid container spacing={5} >
<Grid item xs={1}  >
<Typography sx={{fontSize:"30px"  , color:"white"}}>2.</Typography>
</Grid>
<Grid item xs={11}  >
<Typography paragraph={true} className="years" >2022 - 2023 </Typography>
<Typography variant={'h5'} className="studyTitle" >   React Developer </Typography>

<Typography paragraph={true} className="schoolName" > Rocky Mountain Technologies India Pvt. Ltd</Typography>

<Typography paragraph={true} className="schoolName" >"After working for one year as a WordPress developer at Rocky Mountain Technologies India Pvt. Ltd., I decided to explore a new programming language, React. I made this shift with a strong desire to learn and grow. I started new projects, where I learned React through self-study and received guidance from experienced mentors. This journey expanded my skills and demonstrated my dedication to ongoing learning and innovation in web development." </Typography>


</Grid>
</Grid>
</Grid>  
 

 
<Grid item xs={12 } className="pointsBoxes">
<Grid container spacing={5} >
<Grid item xs={1}  >
<Typography sx={{fontSize:"30px"  , color:"white"}}>3.</Typography>
</Grid>
<Grid item xs={11}  >
<Typography paragraph={true} className="years" >2022 - 2023 </Typography>
<Typography variant={'h5'} className="studyTitle" > Freelancing  </Typography>
<Typography paragraph={true} className="schoolName" >"Experienced freelancer in website development and Instagram post creation. Delivered websites and engaging Instagram designable posts for clients, enhancing online presence and user engagement. My strategic approach consistently increased client brand visibility and profitability."</Typography>
</Grid>
</Grid>
</Grid>  
 

<Grid item xs={12 } className="pointsBoxes">
<Grid container spacing={5} >
<Grid item xs={1}  >
<Typography sx={{fontSize:"30px"  , color:"white"}}>3.</Typography>
</Grid>
<Grid item xs={11}  >
<Typography paragraph={true} className="years" >2021 - 2022 </Typography>
<Typography variant={'h5'} className="studyTitle" > Delivery Boy  </Typography>
<Typography paragraph={true} className="schoolName" >""I worked part-time as a delivery driver at Domino's Pizza for one year during the night shift to support my studies. I honed my time management and customer service skills during this time."</Typography>
</Grid>
</Grid>
</Grid>  
</Grid>
      </CustomTabPanel>
    </Box>

</Grid>
    </Grid>
    
  </>
  )
}

export default Education