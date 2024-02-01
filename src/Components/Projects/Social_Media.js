import { Grid, Typography } from '@mui/material'
import React from 'react'

function SocialMedia() {
  return (
    <>
   
         <Grid container spacing={3} sx={{my:2,mx:"0px",height:"80vh", overflowY:'scroll', scrollBehavior: "smooth"}} >    
         <Grid xs={12} className='mobile'><Typography variant='h4' sx={{color:'white',m:2, textAlign:'center'}}> Social Media</Typography></Grid> 
       
        <Grid item xs={12} md={6}>
        <a href="https://www.instagram.com/graph_tastic/" target="_blank">
          <img src="Websites_screenshots/Insta/Graphtastic.png" alt="graphtastic"  width="98%" style={{borderRadius:'5px'}}/>
          </a>
        </Grid>
        <Grid item xs={12} md={6}>
        <a href="https://www.instagram.com/galaxynutritionldh/" target="_blank">
          <img src="Websites_screenshots/Insta/galaxynutritionldh.png" alt="galaxynutritionldh" width="98%" style={{borderRadius:'5px'}} />
          </a>
        </Grid>
        
        <Grid item xs={12} md={6}>
        <a href="https://www.instagram.com/gillzinfotechcanada/" target="_blank">
          <img src="Websites_screenshots/Insta/gillinfotech.jpg" alt="galaxynutritionldh" width="98%" style={{borderRadius:'5px'}} />
          </a>
        </Grid>
     
        

      </Grid>
    </>
  )
}

export default SocialMedia