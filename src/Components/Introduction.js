import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import "./style/all_css.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SouthIcon from "@mui/icons-material/South";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

function Introduction() {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Chip
          variant="outlined"
          avatar={<HomeOutlinedIcon style={{ color: "white" }} />}
          label="INTRO"
          sx={{ color: "white" }}
        />
      </Stack>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "60px" },
          fontWeight: "regular",
          color: "White",
          mt: 4,
          fontFamily: "poppins",
        }}
      >
        Hi, I'm{" "}
        <span style={{ color: "#7844e9", fontWeight: "bold" }}>
          {" "}
          Gurmeet Singh
        </span>
        , skilled in React.Js and WordPress.
      </Typography>
      <Grid item xs={12} md={8}>
        <p
          style={{
            color: "#909090",
            fontSize: "16px",
            fontFamily: "poppins",
            textAlign: "justify",
          }}
        >
          Hi, i am Gurmeet Singh, react js and wordpress developer, here to help
          you create impressive website by writing my web-development skills and
          will help uou social media as well as with my potential work.
        </p>
      </Grid>

      <Grid container spcaing={1} sx={{ my: { xs: 10, md: 10 } }}>
        <Grid
          item
          xs={12}
          md={11}
          sx={{ textAlign: { xs: "left", md: "right" }, mb: 5 }}
        >
          <Box sx={{ position: "relative" }}>
            <img
              src="/profile_pic/round-text.png"
              alt="round_img"
              className="myProjectsButton"
            />
            <SouthIcon className="southIcon" />
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography
            variant="h2"
            style={{
              fontSize: { xs: "20px", md: "80px" },
              color: "#7844e9",
              fontWeight: "350",
            }}
          >
            2.5+
          </Typography>
          <p style={{ color: "#909090", fontSize: "16px" }}>
            YEARS OF WORK EXPERIENCE
          </p>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography
            variant="h2"
            style={{
              fontSize: { xs: "20px", md: "80px" },
              color: "#7844e9",
              fontWeight: "350",
            }}
          >
            30+
          </Typography>
          <p style={{ color: "#909090", fontSize: "16px" }}>
            PROJECTS COMPLETED
          </p>
        </Grid>
      </Grid>
    </>
  );
}

export default Introduction;
