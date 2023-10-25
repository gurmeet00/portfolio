import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {Grid } from '@mui/material';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
function WorkWith() {
  return (
<>
<Grid item xs={12} sx={{my:10}}>
    <Stack direction="row" spacing={1}>
<Chip variant="outlined"
 avatar={<WorkOutlineOutlinedIcon style={{color:"white"}}/>} label="Work As Professional In 
Rocky Mountain Technologies India Pvt. Ltd" sx={{color:"white"}}/>
    </Stack>

<Grid item xs={12} sx={{my:5}}>
<a href='https://rockymountaintech.co/' target='_blank'>
    <img src="profile_pic/rockymountain_logo.png" alt='rockymountain' width={140}/>
   </a>
</Grid>

    </Grid>

</>
  )
}

export default WorkWith