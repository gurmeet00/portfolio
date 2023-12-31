import { Box, Button } from '@mui/material'
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
function SideMenu() {
  return (
  <>
    <Box sx={{border:"1px solid #909090", width:"3.3%", marginTop:'10%',  borderRadius:"50px",  position:{xs:"initial", md:'fixed'}, }} >
    <ul style={{ listStyleType:"none",padding:"0px"}}>
        <li><Button sx={{borderRadius:"100%"}}><HomeOutlinedIcon sx={{color:"#909090", fontSize:"24px", mt:2}}/></Button></li>
        <li><Button sx={{borderRadius:"100%"}}><PersonOutlineOutlinedIcon sx={{color:"#909090", fontSize:"24px", mt:2}}/></Button></li>
        <li><Button sx={{borderRadius:"100%"}}><DescriptionOutlinedIcon sx={{color:"#909090", fontSize:"24px", mt:2}}/></Button></li>
        <li><Button sx={{borderRadius:"100%"}}><MailOutlinedIcon sx={{color:"#909090", fontSize:"24px", mt:2}}/></Button></li>
        <li><Button sx={{borderRadius:"100%"}}><CollectionsOutlinedIcon sx={{color:"#909090", fontSize:"24px", mt:2}}/></Button></li>
        <li><Button sx={{borderRadius:"100%"}}><WidgetsOutlinedIcon sx={{color:"#909090", fontSize:"24px", mt:2}}/></Button></li>

    </ul>
    </Box>
  </>
  )
}

export default SideMenu