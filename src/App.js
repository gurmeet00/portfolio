import './App.css';
import { Box, Grid } from '@mui/material';
import Profile from './Components/Profile';
import Introduction from './Components/Introduction';
import SideMenu from './Components/SideMenu';
import Education from './Components/Education';
import About from './Components/About';
import Skill from './Components/Skill';
import Projects from './Components/Projects';
import WorkWith from './Components/Work_With';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';


function App() {
  return (
<>
  <Grid container spacing={5} sx={{padding:{md:"40px 20px", xs:"50px 20px  "}}}>
    <Grid item md={3}  >
    
<Profile />

    </Grid>
    <Grid item md={1}>
</Grid>
    <Grid item md={6}  sx={{p:3}}>
    <Introduction/>
    <About/>
<Education/>
<Skill/>
<Projects />
<WorkWith/>
<ContactForm/>
    </Grid>
    <Grid item md={2} sx={{display:"flex", justifyContent:'center'}}>
    <SideMenu/>
    </Grid>   
  </Grid>
  <Grid container spacing={1} sx={{mt:5 }}>
  <Footer/>
  </Grid>
</>
  );
}

export default App;
