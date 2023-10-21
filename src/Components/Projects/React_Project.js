import { Grid } from '@mui/material'
import React from 'react'

function ReactProject() {
  return (
    <>
    
         <Grid container spacing={3} sx={{my:2}} >
        <Grid item xs={6}>
          <img src="Websites_screenshots/vendor.png" alt="vendor" width={400} height={170} />
        </Grid>
        {/* <Grid item xs={6}>
          <img src="Websites_screenshots/Bitcoin-Corporation.png" alt="rockymountain" width={400} />
        </Grid>
    */}
      </Grid>
    </>
  )
}

export default ReactProject