import { Grid, Typography } from '@mui/material'
import React from 'react'


function WordpressProject() {
  
   const WordpressImgs=[
    {domain:"https://mirchiyyc.com/", name:"Mirchyyc.jpg"},
    {domain:"https://madchefindia.com/", name:"MadchefIndia.jpg"},
    {domain:"https://originalsweets.ca/", name:"orgsweet.jpg"},
    {domain:"https://bombaybakery.ca/", name:"Bombaybakery.jpg"},
    {domain:"https://bombaydosacafe.ca", name:"Bombaydosacafe.jpg"},
    {domain:"https://bombaychowpatty.ca/", name:"Bombay_Chowpatty.jpg"},
    {domain:"http://rockymountaintech.co/", name:"Rockymountain.jpg"},
    {domain:"http://tngwebsolutions.ca/", name:"tngwebsolutions.jpg"},
    {domain:"https://rdhaliwalinsurance.ca/", name:"rdhaliwal.jpg"},
    {domain:"https://dezien.in/", name:"DezienPlus.jpg"},
    {domain:"ttps://calgaryinsurancequotes.com/", name:"calgary_insurance.jpg"},
    {domain:"https://lakeviewblinds.ca/", name:"lakeview.jpg"},
    {domain:"https://eyecareplus.ca/", name:"eyecareplus.jpg"},
    {domain:"https://build-core.ca/", name:"Build-Core.jpg"},
    {domain:"https://csimmigration.ca/", name:"cs.jpg"},
    {domain:"https://breathewellfurnace.ca/", name:"breathwell.jpg"},
    {domain:"https://kharalproperties.com/", name:"kharal.jpg"},
    {domain:"https://yourinsuranceexpert.ca/", name:"insuranceexpert.jpg"},
    {domain:"https://dhanjalmusicacademy.in/", name:"dhanjal.jpg"},
    ]
     
    
  return (
    <>
         <Grid container spacing={3} sx={{my:2, mx:"0px", height:"80vh", overflowY:'scroll', scrollBehavior: "smooth"}} >
       <Grid xs={12} className='mobile'><Typography variant='h4' sx={{color:'white',m:2, textAlign:'center'}}>Wordpress Project </Typography></Grid> 
       {WordpressImgs.map((ele,index)=>(
        <>
        <Grid item xs={12} md={6} key={index} >
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

export default WordpressProject


