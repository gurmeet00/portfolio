import { Grid, Typography } from "@mui/material";
import React from "react";

function ReactProject() {
  const ReactProjects = [
    {
      domain: "https://amerijet.com/",
      name: "Amerijet.jpg",
    },
    { domain: "https://srveup.com/", name: "SrveUp.jpg" },

    { domain: "https://gmart-store.vercel.app/", name: "g_mart.jpg" },

    { domain: "https://netflix-entertainment.vercel.app", name: "netflix.jpg" },

    {
      domain: "#",
      name: "loop_2admin.jpg",
    },
    // { domain: "https://kabutarjindjaan.in/", name: "kabooter.jpg" },
    { domain: "#", name: "vendor.jpg" },
  ];
  return (
    <>
      <Grid container spacing={1} sx={{ my: 2 }}>
        {ReactProjects.map((ele, index) => (
          <>
            <Grid item xs={12} md={6}>
              <a href={ele.domain} target="_blank">
                <img
                  src={"Websites_screenshots/" + ele.name}
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

export default ReactProject;
