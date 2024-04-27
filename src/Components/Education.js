import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Divider, Grid, Typography } from "@mui/material";
import "./style/all_css.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container spacing={4} sx={{ px: 6, py: 2 }}>
          {children}
        </Grid>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Education() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid item xs={12} sx={{ my: 10 }}>
        <Stack direction="row" spacing={1}>
          <Chip
            variant="outlined"
            avatar={<BusinessCenterIcon style={{ color: "white" }} />}
            label="Study & Work"
            sx={{ color: "white" }}
          />
        </Stack>

        <Typography
          className="colored"
          sx={{
            fontSize: { xs: "35px", md: "60px" },
            color: "white",
            fontWeight: "regular",
            mt: 4,
            fontFamily: "poppins",
          }}
        >
          Education & <span style={{ color: "#7844e9" }}> Experience</span>
        </Typography>

        <Grid item xs={12} sx={{ mt: 5 }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label="Education"
                  sx={{
                    color: "white",
                    border: "1px solid grey",
                    borderRadius: "10px 10px 0px 0px",
                  }}
                  {...a11yProps(0)}
                />
                <Tab
                  label="Experience"
                  sx={{
                    color: "white",
                    border: "1px solid grey",
                    borderRadius: "10px 10px 0px 0px",
                  }}
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Grid container spacing={2} sx={{ my: 5 }}>
                <Grid item xs={12} className="pointsBoxes">
                  <Grid container spacing={5}>
                    <Grid item xs={2} md={1}>
                      <Box className="numRoundBorder">
                        <Typography className="numRound">1.</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={10} md={10} className="educationBox">
                      <Grid
                        xs={12}
                        md={12}
                        sx={{ borderBottom: { sx: "1px solid white" } }}
                      >
                        <Typography variant={"h5"} className="studyTitle">
                          {" "}
                          BSC.IT (Distance Education) - Currently pursuing{" "}
                        </Typography>
                      </Grid>
                      <Grid xs={12}>
                        <Typography paragraph={true} className="schoolName">
                          {" "}
                          Lovely Professional University , Jalandhar - Delhi
                          G.T. Road, Phagwara, Punjab (India),
                        </Typography>
                      </Grid>
                      <Grid xs={12}>
                        <Typography paragraph={true} className="years">
                          2021 - 2024
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} className="pointsBoxes">
                  <Grid container spacing={5}>
                    <Grid item xs={2} md={1}>
                      <Box className="numRoundBorder">
                        <Typography className="numRound">2.</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={10} md={10} className="educationBox">
                      <Grid xs={12}>
                        <Typography variant={"h5"} className="studyTitle">
                          Web development Course{" "}
                        </Typography>
                      </Grid>

                      <Grid xs={12}>
                        <Typography paragraph={true} className="schoolName">
                          G.N.D.E.COLLEGE (Science & Technology Entrepreneurs) ,
                          Ludhiana
                        </Typography>
                      </Grid>
                      <Grid xs={12}>
                        <Typography paragraph={true} className="years">
                          January/2021 - June/2021
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} className="pointsBoxes">
                  <Grid container spacing={5}>
                    <Grid item xs={2} md={1}>
                      <Box className="numRoundBorder">
                        <Typography className="numRound">3.</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={10} md={10} className="educationBox">
                      <Grid xs={12}>
                        <Typography variant={"h5"} className="studyTitle">
                          Diesel Mechanic Diploma{" "}
                        </Typography>
                      </Grid>
                      <Grid xs={12}>
                        <Typography paragraph={true} className="schoolName">
                          Govt.Model Industrial Training Institute Ludhiana
                          <br />
                          3791/1, Gill Rd, New Grain Market, Shimlapuri,
                          Ludhiana, Punjab
                        </Typography>
                      </Grid>
                      <Grid xs={12}>
                        <Typography paragraph={true} className="years">
                          August/2017 - July/2018
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} className="pointsBoxes">
                  <Grid container spacing={5}>
                    <Grid item xs={2} md={1}>
                      <Box className="numRoundBorder">
                        <Typography className="numRound">4.</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={10} md={10} className="educationBox">
                      <Grid xs={12}>
                        <Typography variant={"h5"} className="studyTitle">
                          {" "}
                          12th (Non-Medical){" "}
                        </Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <Typography paragraph={true} className="schoolName">
                          Govt.Model.Sen.Sec.School, Model Town Ludhiana,
                          Punjab, India
                        </Typography>
                      </Grid>
                      <Grid xs={12}>
                        <Typography paragraph={true} className="years">
                          2016 - 2017
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} className="pointsBoxes">
                  <Grid container spacing={5}>
                    <Grid item xs={2} md={1}>
                      <Box className="numRoundBorder">
                        <Typography className="numRound">5.</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={10} md={10} className="educationBox">
                      <Grid xs={12} md={6}>
                        <Typography variant={"h5"} className="studyTitle">
                          10th
                        </Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <Typography paragraph={true} className="schoolName">
                          G.N.National.Public.School, Shimlapuri Ludhiana,
                          Punjab, India
                        </Typography>
                      </Grid>
                      <Grid xs={12}>
                        <Typography paragraph={true} className="years">
                          2014 - 2015
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Grid container spacing={2} sx={{ my: 4 }}>
                <Grid item xs={12} className="pointsBoxes">
                  <Grid container spacing={5}>
                    <Grid item xs={2} md={1}>
                      <Box className="numRoundBorder">
                        <Typography className="numRound">1.</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={10} md={10} className="educationBox">
                      <Grid container spacing={1}>
                        <Grid xs={12} md={6}>
                          <Typography variant={"h5"} className="studyTitle">
                            React Developer (Full Time)
                          </Typography>
                        </Grid>
                        <Grid xs={12} md={6}>
                          <Typography paragraph={true} className="years">
                            2022 - 2023{" "}
                          </Typography>
                        </Grid>
                        <Grid xs={12} md={11}>
                          <Typography paragraph={true} className="schoolName">
                            {" "}
                            Rocky Mountain Technologies India Pvt. Ltd
                          </Typography>
                          <Typography paragraph={true} className="schoolName">
                            "After working for one year as a WordPress developer
                            at Rocky Mountain Technologies India Pvt. Ltd., I
                            decided to explore a new programming language,
                            React. I made this shift with a strong desire to
                            learn and grow. I started new projects, where I
                            learned React through self-study and received
                            guidance from experienced mentors. This journey
                            expanded my skills and demonstrated my dedication to
                            ongoing learning and innovation in web development."{" "}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} className="pointsBoxes">
                  <Grid container spacing={5}>
                    <Grid item xs={2} md={1}>
                      <Box className="numRoundBorder">
                        <Typography className="numRound">2. </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={10} md={10} className="educationBox">
                      <Grid container spacing={0.5}>
                        <Grid xs={12} md={6}>
                          <Typography variant={"h5"} className="studyTitle">
                            {" "}
                            Freelancing ( Part-Time){" "}
                          </Typography>
                        </Grid>

                        <Grid xs={12} md={6}>
                          <Typography paragraph={true} className="years">
                            2021 - 2023{" "}
                          </Typography>
                        </Grid>
                        <Grid xs={12} md={11}>
                          <Typography paragraph={true} className="schoolName">
                            "Experienced freelancer in website development and
                            Instagram post creation. Delivered websites and
                            engaging Instagram designable posts for clients,
                            enhancing online presence and user engagement. My
                            strategic approach consistently increased client
                            brand visibility and profitability."
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} className="pointsBoxes">
                  <Grid container spacing={5}>
                    <Grid item xs={2} md={1}>
                      <Box className="numRoundBorder">
                        <Typography className="numRound">3. </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={10} md={10} className="educationBox">
                      <Grid container spacing={0.5}>
                        <Grid xs={12} md={6}>
                          <Typography variant={"h5"} className="studyTitle">
                            {" "}
                            Wordpress Developer{" "}
                          </Typography>
                        </Grid>
                        <Grid xs={12} md={6}>
                          <Typography paragraph={true} className="years">
                            2021 - 2022{" "}
                          </Typography>
                        </Grid>
                        <Grid xs={12} md={12}>
                          <Typography paragraph={true} className="schoolName">
                            {" "}
                            Rocky Mountain Technologies India Pvt. Ltd
                          </Typography>

                          <Typography paragraph={true} className="schoolName">
                            {" "}
                            "I worked for a year at Rocky Mountain Technologies
                            India Pvt. Ltd. as a WordPress developer. During
                            this time, I learned a lot about creating creative
                            websites using WordPress. I had the chance to build
                            more than 20 websites, each with its unique design
                            and features. This experience has strengthened my
                            WordPress skills and creativity, making me a
                            valuable asset in web development."
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} className="pointsBoxes">
                  <Grid container spacing={5}>
                    <Grid item xs={2} md={1}>
                      <Box className="numRoundBorder">
                        <Typography className="numRound">4. </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={10} md={10} className="educationBox">
                      <Grid container spacing={0.5}>
                        <Grid xs={12} md={6}>
                          <Typography variant={"h5"} className="studyTitle">
                            {" "}
                            Bodyshop Adviser{" "}
                          </Typography>
                        </Grid>
                        <Grid xs={12} md={6}>
                          <Typography paragraph={true} className="years">
                            August/2020 - December/2020{" "}
                          </Typography>
                        </Grid>
                        <Grid xs={12} md={12}>
                          <Typography paragraph={true} className="schoolName">
                            {" "}
                            Grover Hyundai - Hyundai Car - Hyundai Car Sales -
                            Hyundai Car Dealer Ludhiana
                          </Typography>

                          <Typography paragraph={true} className="schoolName">
                            {" "}
                            At Grover Hyundai, my role as a Bodyshop Adviser
                            involved interacting with customers and coordinating
                            the repair of damaged car parts.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CustomTabPanel>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Education;
