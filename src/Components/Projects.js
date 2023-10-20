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




function Projects() {

const tabTitles={
    color:"white", 
    border:"1px solid grey",
     borderRadius:"10px 0px 0px 10px",
     marginBottom:"10px"
}

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ padding:"10px 20px" }}>
                <Box>{children}</Box>
              </Box>
            )}
          </div>
        );
      }

      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `vertical-tab-${index}`,
          'aria-controls': `vertical-tabpanel-${index}`,
        };
      }

      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

  return (
  <>
    
    <Grid item xs={12} sx={{my:10}}>
    <Stack direction="row" spacing={1}>
<Chip variant="outlined"
 avatar={<WidgetsOutlinedIcon/>} label="Projects" sx={{color:"white"}}/>
    </Stack>

    <Typography sx={{fontSize:{xs:"24px", md:"45px"},fontWeight: 'regular', color:"White", mt:4, fontFamily:"poppins"}}>

    Featured  <span style={{color:"#7844e9"}}> Projects</span>.
</Typography>
<p style={{color:"#909090", fontSize:'18px'}}>Since beginning my journey as a freelance designer nearly 8 years ago. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
<Divider/>
    </Grid>


    <Box
      sx={{ flexGrow: 1, bgcolor: '#131313', color:"white", display: 'flex', height: 250 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'white' }}
      >
        <Tab label="Wordpress Projects" style={tabTitles} {...a11yProps(0)} />
        <Tab label="React Projects"   style={tabTitles} {...a11yProps(1)} />
        <Tab label="Personal Projects"  style={tabTitles}  {...a11yProps(2)} />
        <Tab label="Freelancing Projects"   style={tabTitles} {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
  <Grid container spacing={28}>
    <Grid item xs={6} md={3}>
<img src='Websites_screenshots/Rockymountain.png' alt="wordpress_projects" width="200px"/>
    </Grid>
    <Grid item xs={6} md={3}>
<img src='Websites_screenshots/Rockymountain.png' alt="wordpress_projects" width="200px"/>
    </Grid>
    
  </Grid>
    <Grid container spacing={10}>
        <Grid item xs={6} md={3}>
<img src='Websites_screenshots/Rockymountain.png' alt="wordpress_projects" width="200px"/>
    </Grid>
    <Grid item xs={6} md={3}>
<img src='Websites_screenshots/Rockymountain.png' alt="wordpress_projects" width="200px"/>
    </Grid>
    
  </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>

  </>
  )
}

export default Projects