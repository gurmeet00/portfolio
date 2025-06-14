import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Box, Grid, Typography } from "@mui/material";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";

function Skill() {
  const skills = [
    { name: "React", imagePath: "react.png", alt: "react" },

    { name: "Next", imagePath: "nextjs.png", alt: "next" },
    { name: "Gatsby", imagePath: "Gatsby.png", alt: "gatsby" },

    { name: "Javascript", imagePath: "js.png", alt: "javascript" },
    {
      name: "Redux/RTK",
      imagePath: "rtk.png",
      alt: "redux/rtk",
    },
    {
      name: "React Query",
      imagePath: "react_query.png",
      alt: "react_query",
    },
    { name: " Material UI", imagePath: "mui.png", alt: "mui" },
    { name: "Git", imagePath: "git.png", alt: "git" },
    {
      name: "Wordpress",
      imagePath: "wordpress.png",
      alt: "wordpress",
    },
    { name: "HTML", imagePath: "html.png", alt: "html" },
    { name: "CSS", imagePath: "css_.png", alt: "css" },
    {
      name: "Tailwind CSS",
      imagePath: "tailwind.png",
      alt: "tailwind_css",
    },
    {
      name: "Bootstrap",
      imagePath: "bootstrap.png",
      alt: "bootstrap",
    },

    {
      name: "Firebase",
      imagePath: "firebase.png",
      alt: "firbase",
    },
    { name: "Photoshop", imagePath: "ps.png", alt: "photoshop" },
  ];
  return (
    <>
      <Grid item xs={12} sx={{ my: 5 }}>
        <Stack direction="row" spacing={1}>
          <Chip
            variant="outlined"
            avatar={<CollectionsOutlinedIcon style={{ color: "white" }} />}
            label="My Skills"
            sx={{ color: "white" }}
          />
        </Stack>

        <Typography
          sx={{
            fontSize: { xs: "34px", md: "60px" },
            fontWeight: "regular",
            color: "White",
            mt: 3,
            fontFamily: "poppins",
          }}
        >
          My <span style={{ color: "#7844e9" }}> Perks</span>
        </Typography>
        <Grid container spacing={4} sx={{ my: 3 }}>
          {skills.map((ele, index) => {
            return (
              <>
                <Grid item xs={6} md={4} lg={2.5}>
                  <Box className="logoBox">
                    <img
                      src={`/profile_pic/${ele.imagePath}`}
                      alt={ele.alt}
                      width={80}
                    />
                    {/* <Typography className="percentage"  >80%</Typography> */}
                  </Box>
                  <Typography paragraph={true} className="techName">
                    {ele.name}
                  </Typography>
                </Grid>
              </>
            );
          })}
          <br />
        </Grid>
      </Grid>
    </>
  );
}

export default Skill;
