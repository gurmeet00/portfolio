import './App.css';
import { Box, Grid } from '@mui/material';
import Profile from './Components/Profile';
import Introduction from './Components/Introduction';
import SideMenu from './Components/SideMenu';
import Education from './Components/Education';
import About from './Components/About';
import Skill from './Components/Skill';
import Projects from './Components/Projects';


function App() {
  return (
<>
  <Grid container spacing={10} sx={{padding:{md:"60px 20px ", xs:"50px 20px  "}}}>
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
    </Grid>
    <Grid item md={2}>
    <SideMenu/>
    </Grid>
  </Grid>
</>
  );
}

export default App;
