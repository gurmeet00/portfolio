import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import "../index.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import "./style/all_css.css";
function Profile() {
  return (
    <>
      <Box
        sx={{
          px: "25px",
          py: "20px",
          color: "white",
          border: "1px solid #909090",
          borderRadius: "15px",
          position: { xs: "initial", md: "initial", lg: "fixed" },
          width: { xs: "85 %", md: "85 %", lg: "20%" },
        }}
      >
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "block", md: "flex", lg: "block" },
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant={"h3"}
              sx={{ fontWeight: "bold", fontSize: { xs: "40px", md: "45px" } }}
            >
              Gurmeet Singh
            </Typography>
            <Typography
              paragraph={true}
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "15px", md: "17px" },
                mt: "12px",
                color: "#7844e9",
              }}
            >
              {" "}
              React Developer{" "}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
              pt: "40px",
              borderTop: "1px solid  #909090",
            }}
          >
            <Avatar
              src="/profile_pic/profile_photo.png"
              alt="profile"
              sx={{ width: 220, height: 220, mx: "auto", my: "25px" }}
            />
            <Typography
              variant="h5"
              sx={{ mt: "10px", fontSize: "30px", fontFamily: "poppins" }}
            >
              Hi, i am
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                margin: "10px 0px",
                fontSize: "28px",
                color: "#7844e9",
                fontWeight: "bold",
                textShadow: "0 0 10px #7844e9",
              }}
            >
              React Developer
            </Typography>

            {/* <ul  className='secText'>
      <li><span>Wordpress Developer</span></li>
      <li><span>React Developer</span></li>
      <li><span>Freelancer</span></li>
    </ul> */}
            {/* <Typography
              paragraph={true}
              sx={{
                fontFamily: "Poppins",
                fontSize: "15px",
                mt: "10  px",
                color: "#909090",
              }}
            >
              Check My Social Media Profiles
            </Typography> */}
            <Typography
              paragraph={true}
              sx={{
                fontFamily: "Poppins",
                fontSize: "15px",
                mt: "10  px",
                color: "#909090",
              }}
            >
              "Skilled React.js developer, building impressive websites with
              expertise and creativity."
            </Typography>
            <a href="doc/Gurmeet_Singh_Resume.pdf" target="_blank">
              <Button className="resumeBtn">
                <DescriptionOutlinedIcon sx={{ mr: 1 }} /> My Resume
              </Button>
            </a>
            {/* <Grid container spacing={1}> */}
            {/* <Grid item xs={3} >
    <a href="https://www.instagram.com/i_am_gurmeet_/" target="_blank  ">
    <Avatar src="/profile_pic/instagram.png" alt="profile"  sx={{width:40 , height:40, margin:"auto"}}/>
    </a></Grid>
    <Grid item xs={3}>
    <a href="https://www.linkedin.com/in/i-am-gurmeet-singh/" target="_blank  ">
    <Avatar src="/profile_pic/linkedin.png" alt="profile"  sx={{width:40 , height:40, margin:"auto" }} />
    </a>
    </Grid>
    <Grid item xs={3}>
    <a href="#">
    <Avatar src="profile_pic/git.png" alt="profile"  sx={{width:40 , height:40, margin:"auto" }} />
    </a>
    </Grid>
    <Grid item xs={3}>
    <a href="https://stackoverflow.com/users/22783256/gurmeet-singh" target='_blank'>
    <Avatar src="profile_pic/stackoverflow.png" alt="stackoverflow"  sx={{width:40 , height:40, margin:"auto" }} />
    </a>
    </Grid> */}
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Profile;
