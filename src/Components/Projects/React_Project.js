import { Grid, Typography } from '@mui/material'
import React from 'react'

function ReactProject() {
  return (
    <>
    
         <Grid container spacing={1} sx={{my:2}} >
         
         <Grid xs={12} className='mobile'><Typography variant='h4' sx={{color:'white',m:2, textAlign:'center'}}>React Projects</Typography></Grid> 
       
         <Grid item xs={12} md={6}>
        <a href="https://netflix-web-movies.vercel.app/"  target='_blank'>
          <img src="Websites_screenshots/netflix.jpg" alt="kabooterjindjaan"   width="98%"  style={{borderRadius:'5px'}} />
          </a> 
          </Grid>
      
        <Grid item xs={12} md={6}>
        <a href="https://kabutarjindjaan.in/"  target='_blank'>
          <img src="Websites_screenshots/kabooter.png" alt="kabooterjindjaan"   width="98%"  style={{borderRadius:'5px'}} />
          </a> 
          </Grid>
          
          <Grid item xs={12} md={6}>
        <a href="https://al-tamimi.scenetech.co/login/"  target='_blank'>
          <img src="Websites_screenshots/vendor.png" alt="vendor"     width="98%"  style={{borderRadius:'5px'}}/>
          </a>  
          </Grid>
      </Grid>
    </>
  )
}

export default ReactProject