import { Grid } from '@mui/material'
import React from 'react'

function FreelancingProject() {
  return (
    <>
    
         <Grid container spacing={3} sx={{my:2}} >
        <Grid item xs={6}>
          <img src="Websites_screenshots/ATI.png" alt="ati" width={400} height={170} />
        </Grid>
        <Grid item xs={6}>
          <img src="Websites_screenshots/Bitcoin-Corporation.png" alt="bitcoin-corporation" width={400} />
        </Grid>
    
        <Grid item xs={6}>
          <img src="Websites_screenshots/Insta/Graphtastic.png" alt="graphtastic" width={400} />
        </Grid>
        <Grid item xs={6}>
          <img src="Websites_screenshots/Insta/galaxynutritionldh.png" alt="galaxynutritionldh" width={400} />
        </Grid>
     
      </Grid>
    </>
  )
}

export default FreelancingProject