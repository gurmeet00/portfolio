import { Grid } from '@mui/material'
import React from 'react'

function FreelancingProject() {
  return (
    <>
    
         <Grid container spacing={3} sx={{my:2}} >
      
         <Grid item xs={6}>
        <a href="https://madchefindia.com/"  target='_blank'>
          <img src="Websites_screenshots/MadchefIndia.jpg" alt="MadchefIndia" width="98%" />
          </a>
        </Grid>
         <Grid item xs={6}>
        <a href="https://dezien.in/"  target='_blank'>
          <img src="Websites_screenshots/DezienPlus.jpg" alt="DezienPlus" width="98%" />
          </a>   
          </Grid>
       
        <Grid item xs={6}>
        <a href="https://amrittube.com/" target='_blank'>
          <img src="Websites_screenshots/ATI.jpg" alt="ati"  width="98%"/>
          </a>
        </Grid>
        <Grid item xs={6}>
        <a href="https://bitcoincorporation.info/" target='_blank'>
          <img src="Websites_screenshots/Bitcoin-Corporation.jpg" alt="bitcoin-corporation" width="98%"  />
       </a>
        </Grid>  
        <Grid item xs={6}>
        <a href="https://dhanjalmusicacademy.in/"  target='_blank'>
          <img src="Websites_screenshots/dhanjal.jpg" alt="bombaychowpatty" width="98%" />
          </a>
        </Grid>
      </Grid>
    </>
  )
}

export default FreelancingProject