import { Grid } from '@mui/material'
import React from 'react'

function SocialMedia() {
  return (
    <>
    
         <Grid container spacing={3} sx={{my:2}} >    
        <Grid item xs={6}>
          <img src="Websites_screenshots/Insta/Graphtastic.png" alt="graphtastic"  width="98%"/>
        </Grid>
        <Grid item xs={6}>
          <img src="Websites_screenshots/Insta/galaxynutritionldh.png" alt="galaxynutritionldh" width="98%" />
        </Grid>
     
      </Grid>
    </>
  )
}

export default SocialMedia