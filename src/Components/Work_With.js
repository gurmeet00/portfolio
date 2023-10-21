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
 avatar={<WorkOutlineOutlinedIcon/>} label="WORK WITH 60+ BRANDS WORLDWIDE" sx={{color:"white"}}/>
    </Stack>

<Grid item xs={12} sx={{my:2}}>
    <img src="profile_pic/rockymountain.png" alt='rockymountain'/>
</Grid>

    </Grid>

</>
  )
}

export default WorkWith