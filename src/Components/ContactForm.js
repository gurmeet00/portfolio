import React from 'react'
import Stack from '@mui/material/Stack';
import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

function ContactForm() {
  return (
  <>
        
        <Grid item xs={12} sx={{my:10}}>
    <Stack direction="row" spacing={1}>
<Chip variant="outlined"
 avatar={<FeedOutlinedIcon style={{color:'white'}}/>} label="Contact" sx={{color:"white"}}/>
    </Stack>

    <Typography sx={{fontSize:{xs:"24px", md:"45px"},fontWeight: 'regular', color:"White", mt:4, fontFamily:"poppins"}}>
    Let's Work  <span style={{color:"#7844e9"}}> Together!</span>
</Typography>
    </Grid>

    <form >
    <Grid container spacing={5}>
    <Grid item xs={12} md={6}>
    <Typography sx={{color:"white", fontFamily:"poppins"}}> Name</Typography>
    <TextField type="text" id="standard-basic" placeholder='name'  variant="standard" fullWidth sx={{color:"white", borderBottom:'1px solid white'}} />
    </Grid>
    <Grid item xs={12} md={6}>
    <Typography sx={{color:"white", fontFamily:"poppins"}}> Email</Typography>

    <TextField type="email" id="standard-basic"   variant="standard" fullWidth sx={{color:"white", borderBottom:'1px solid white'}} />
    </Grid>
    <Grid item xs={12} md={6}>
    
    <Typography sx={{color:"white", fontFamily:"poppins"}}> Phone</Typography>

    <TextField type="tel" id="standard-basic"   variant="standard" fullWidth sx={{color:"white", borderBottom:'1px solid white'}} />
    </Grid>
    <Grid item xs={12} md={6}>
    <Typography sx={{color:"white", fontFamily:"poppins"}}> Subject</Typography>
    <TextField type="text" id="standard-basic"   variant="standard" fullWidth sx={{color:"white", borderBottom:'1px solid white'}} />
    </Grid>
    <Grid item xs={12} md={12}>

<textarea rows={6} style={{width:"100%",borderRadius:"15px", backgroundColor:"transparent", color:"white", fontFamily:"poppins", padding:"10px 0px 5px 10px"}} >

</textarea>

    </Grid>
    <Grid item xs={12} md={3} >
        <Button variant='contained' size="large" fullWidth  sx={{background:"#7844e9", borderRadius:"15px"}}>Submit</Button>
    </Grid>
    </Grid>
    </form>
  </>
  )
}

export default ContactForm