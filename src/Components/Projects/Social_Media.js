import { Grid, Typography } from "@mui/material";
import React from "react";

function SocialMedia() {
  const SocialMedia = [
    {
      domain: "https://www.instagram.com/graph_tastic/",
      name: "Graphtastic.png",
    },
    // {
    //   domain: "https://www.instagram.com/galaxynutritionldh/",
    //   name: "galaxynutritionldh.png",
    // },
    {
      domain: "https://www.instagram.com/gillzinfotechcanada/",
      name: "gillinfotech.jpg",
    },
  ];

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          my: 2,
          mx: "0px",
          height: "80vh",
          overflowY: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        {SocialMedia.map((ele, index) => (
          <>
            <Grid item xs={12} md={6} key={index}>
              <a href={ele.domain} target="_blank">
                <img
                  src={"Websites_screenshots/Insta/" + ele.name}
                  alt={ele.name}
                  width="98%"
                  style={{ borderRadius: "5px" }}
                />
              </a>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}

export default SocialMedia;
