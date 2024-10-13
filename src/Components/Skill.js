import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Box, Grid, Typography } from "@mui/material";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";

function Skill() {
  const skills = [
    { name: "React.js", imagePath: "/profile_pic/react.png", alt: "react" },

    { name: "Next.js", imagePath: "/profile_pic/nextjs.png", alt: "next" },

    { name: "Javascript", imagePath: "/profile_pic/js.png", alt: "javascript" },
    {
      name: "Redux/Redux Tool Kit",
      imagePath: "/profile_pic/rtk.png",
      alt: "redux/rtk",
    },
    {
      name: "React Query",
      imagePath: "/profile_pic/react_query.png",
      alt: "react_query",
    },
    { name: " Material UI", imagePath: "/profile_pic/mui.png", alt: "mui" },
    { name: "Git", imagePath: "/profile_pic/git.png", alt: "git" },
    {
      name: "Wordpress",
      imagePath: "/profile_pic/wordpress.png",
      alt: "wordpress",
    },
    { name: "HTML", imagePath: "/profile_pic/html.png", alt: "html" },
    { name: "CSS", imagePath: "/profile_pic/css_.png", alt: "css" },
    {
      name: "Tailwind CSS",
      imagePath: "/profile_pic/tailwind.png",
      alt: "tailwind_css",
    },
    {
      name: "Bootstrap",
      imagePath: "/profile_pic/bootstrap.png",
      alt: "bootstrap",
    },

    {
      name: "Firebase",
      imagePath: "/profile_pic/firebase.png",
      alt: "firbase",
    },
    { name: "Photoshop", imagePath: "/profile_pic/ps.png", alt: "photoshop" },
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
                    <img src={ele.imagePath} alt={ele.alt} width={80} />
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
