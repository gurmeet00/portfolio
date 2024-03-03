import { Grid, Typography } from '@mui/material'
import React from 'react'

function ReactProject() {
  const ReactProjects=[
    {domain:"https://netflix-web-movies.vercel.app/", name:"netflix.jpg"},
    {domain:"https://kabutarjindjaan.in/", name:"kabooter.png"},
    {domain:"https://al-tamimi.scenetech.co/login/", name:"vendor.png"},
  ]
  return (
    <>
    
         <Grid container spacing={1} sx={{my:2}} >
         
         <Grid xs={12} className='mobile'><Typography variant='h4' sx={{color:'white',m:2, textAlign:'center'}}>React Projects</Typography></Grid> 
            {ReactProjects.map((ele,index)=>(
              <>
              <Grid item xs={12} md={6}>
        <a href={ele.domain}  target='_blank'>
          <img src={"Websites_screenshots/"+ele.name} alt={ele.name}     width="98%"  style={{borderRadius:'5px'}}/>
          </a>  
          </Grid>
              </>
            ))}    
    
      </Grid>
    </>
  )
}

export default ReactProject