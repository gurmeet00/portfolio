import { Grid } from '@mui/material'
import React from 'react'

function ReactProject() {
  return (
    <>
    
         <Grid container spacing={1} sx={{my:2}} >
        <Grid item xs={6}>
        
        <a href="https://al-tamimi.scenetech.co/login/"  target='_blank'>
          <img src="Websites_screenshots/vendor.png" alt="vendor"     width="98%"/>
          </a>  </Grid>
        <Grid item xs={6}>
        <a href="https://kabutarjindjaan.in/"  target='_blank'>

          <img src="Websites_screenshots/kabooter.png" alt="kabooterjindjaan"   width="98%" />
       
          </a> </Grid>
   
      </Grid>
    </>
  )
}

export default ReactProject