import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Divider, Grid } from '@mui/material';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WordpressProject from './Projects/Wordpress_Project';
import FreelancingProject from './Projects/Freelancing_Project';
import ReactProject from './Projects/React_Project';



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
        <Grid container spacing={5} sx={{ p: 6 }}>
          {children}
        </Grid>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Projects() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
  <>
    
    <Grid item xs={12} sx={{my:6}}>
    <Stack direction="row" spacing={1}>
<Chip variant="outlined"
 avatar={<WidgetsOutlinedIcon/>} label="Projects" sx={{color:"white"}}/>
    </Stack>

    <Typography sx={{fontSize:{xs:"24px", md:"45px"},fontWeight: 'regular', color:"White", mt:4, fontFamily:"poppins"}}>

    Featured  <span style={{color:"#7844e9"}}> Projects</span>
</Typography>
<p style={{color:"#909090", fontSize:'18px'}}>Since beginning my journey as a freelance designer nearly 8 years ago. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
<Divider/>
    </Grid>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Wordpress Project "  sx={{color:"white", border:"1px solid grey", borderRadius:"10px 10px 0px 0px"}} {...a11yProps(0)} />
          <Tab label="React Projects" sx={{color:"white", border:"1px solid grey", borderRadius:"10px 10px 0px 0px"}} {...a11yProps(1)} />
          <Tab label="Freelancing Projects" sx={{color:"white", border:"1px solid grey", borderRadius:"10px 10px 0px 0px"}} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} sx={{ width: '100%' , height:"5%"}}>
     <WordpressProject/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <ReactProject/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
     <FreelancingProject/>
      </CustomTabPanel>
    </Box>
 
  </>
  )
}

export default Projects