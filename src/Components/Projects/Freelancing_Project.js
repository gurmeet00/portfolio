import { Grid, Typography } from '@mui/material'
import React from 'react'

function FreelancingProject() {
  const ReactProjects=[
   
    {domain:"https://findna.io/", name:"Findna.jpg"},
    {domain:"https://madchefindia.com/", name:"MadchefIndia.jpg"},
    {domain:"https://dezien.in/", name:"DezienPlus.jpg"},
    {domain:"https://amrittube.com/", name:"ATI.jpg"},
    {domain:"https://bitcoincorporation.info/", name:"Bitcoin-Corporation.jpg"},
    {domain:"https://dhanjalmusicacademy.in/", name:"dhanjal.jpg"},
    
  ]
  return (
    <>
    
         <Grid container spacing={3} sx={{my:2}} >
         <Grid xs={12} className='mobile'><Typography variant='h4' sx={{color:'white',m:2, textAlign:'center'}}>Freelancing Projects</Typography></Grid> 
    {ReactProjects.map((ele,index)=>(
      <>
      <Grid item xs={12} md={6} key={index}>
        <a href={ele.domain}  target='_blank'>
          <img src={"Websites_screenshots/"+ele.name} alt={ele.name} width="98%" style={{borderRadius:'5px'}} />
          </a>
        </Grid>
      </>
    ))}      
      </Grid>
    </>
  )
}

export default FreelancingProject