import './app.scss'
import Navbar from './components/navbar';
import { Typography } from '@mui/material';
import About from './sections/about';
import Projects from './sections/projects';
import Contact from './sections/contact';
import bgimg from './video/backgroundimage.mp4'

function App() {
  return (
    <div className='app'>
      <video autoPlay loop muted>
        <source src={bgimg} type="video/mp4"/>
      </video>
      <Navbar/>
      <main className='main' id='home'>
        <Typography variant='h1' >Hi.I'm Abdi </Typography>
        <Typography variant='h5' >I am a web developer </Typography>
        <p>Always learning and impoving</p>
        <div className='btnwrapper'>
          <a href='#projects' ><button className='homebtn'>Projects</button></a>
          <a href='#contact'><button className='homebtn'>Contact</button></a>
        </div>
      </main>
      <About/>
      <Projects/>
      <Contact/>
    </div> 
  );
}

export default App;
