import { Grid } from '@mui/material'
import React from 'react'

function SocialMedia() {
  return (
    <>
    
         <Grid container spacing={3} sx={{my:2}} >    
        <Grid item xs={6}>
        <a href="https://www.instagram.com/graph_tastic/" target="_blank">
          <img src="Websites_screenshots/Insta/Graphtastic.png" alt="graphtastic"  width="98%"/>
          </a>
        </Grid>
        <Grid item xs={6}>
        <a href="https://www.instagram.com/galaxynutritionldh/" target="_blank">
          <img src="Websites_screenshots/Insta/galaxynutritionldh.png" alt="galaxynutritionldh" width="98%" />
          </a>
        </Grid>
        
        <Grid item xs={6}>
        <a href="https://www.instagram.com/gillzinfotechcanada/" target="_blank">
          <img src="Websites_screenshots/Insta/gillinfotech.jpg" alt="galaxynutritionldh" width="98%" />
          </a>
        </Grid>
     
        

      </Grid>
    </>
  )
}

export default SocialMedia