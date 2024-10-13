import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
function WorkWith() {
  let companies = [
    {
      name: "Rocky_mountain_technologies_pvt_ltd",
      img: "profile_pic/Rocky_Mountain_Logo.png",
      companyLink: "https://rockymountaintech.co/",
    },
    {
      name: "Infino",
      img: "profile_pic/infino.png",
      companyLink: "https://infino.co/",
    },
  ];
  return (
    <>
      <Grid item xs={12} sx={{ my: 8 }}>
        <Stack direction="row" spacing={1}>
          <Chip
            variant="outlined"
            avatar={<WorkOutlineOutlinedIcon style={{ color: "white" }} />}
            label="Working As React Developer, In Infino"
            sx={{ color: "white" }}
          />
        </Stack>

        <Grid container spacing={5} sx={{ my: "10px", alignItems: "center" }}>
          {companies.map((item) => (
            <>
              <Grid item xs={6} sm={4} md={3}>
                <a href={item.companyLink} target="_blank">
                  <img src={item.img} alt={item.name} width="60%" />
                </a>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default WorkWith;
