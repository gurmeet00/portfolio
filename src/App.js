import "./App.css";
import { Box, Grid } from "@mui/material";
import Profile from "./Components/Profile";
import Introduction from "./Components/Introduction";
import SideMenu from "./Components/SideMenu";
import Education from "./Components/Education";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import WorkWith from "./Components/Work_With";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import "./Components/style/all_css.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <Grid
        container
        spacing={5}
        sx={{ padding: { md: "40px 20px", xs: "20px  " } }}
      >
        <Grid item md={12} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={12} lg={7} sx={{ p: 0 }}>
          <Introduction />
          {/* <span   data-aos="fade-up"></span> */}
          <About />
          <Projects />
          <Skill />
          <WorkWith />
          <Education />
          {/* <ContactForm/> */}
        </Grid>
        <Grid
          item
          md={1}
          sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
        >
          {/* <SideMenu/> */}
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={{ mt: 10 }}>
        <Footer />
      </Grid>
    </>
  );
}

export default App;
