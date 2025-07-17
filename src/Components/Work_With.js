import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
function WorkWith() {
  let companies = [
    {
      name: "Klynetech",
      img: "profile_pic/klynetech.png",
    },
    {
      name: "Infino",
      img: "profile_pic/infino.png",
    },
    {
      name: "Rocky_mountain_technologies_pvt_ltd",
      img: "profile_pic/Rocky_Mountain_Logo.png",
    },
  ];
  return (
    <>
      <Grid item xs={12} sx={{ my: 8 }}>
        <Stack direction="row" spacing={1}>
          <Chip
            variant="outlined"
            avatar={<WorkOutlineOutlinedIcon style={{ color: "white" }} />}
            label="Working As React Developer,"
            sx={{ color: "white" }}
          />
        </Stack>

        <Grid container spacing={5} sx={{ my: "10px", alignItems: "center" }}>
          {companies.map((item) => (
            <>
              <Grid item xs={6} sm={4} md={3}>
                <img src={item.img} alt={item.name} width="60%" />
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default WorkWith;
