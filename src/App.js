import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Information } from './components/Information/Information';
import { Cards } from './components/Cards/Cards';
import { Steps } from './components/Steps/Steps';
import { Swipers } from './components/Swipers/Swipers';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { useMediaQuery } from '@mui/material';
import { Nav } from './components/Nav/Nav';
import { Title } from './components/HomeHeadline/HomeHeadline';
import { HomeAbout } from './components/HomeAbout/HomeAbout';
import { Activity } from './components/Activity/Activity';
import { Values } from './components/Values/Values';
import { Partners } from './components/Partners/Partners';
import { Blog } from './components/Blog/Blog';
import { RecoveryHeadline } from './components/RecoveryHeadline/RecoveryHeadline';
import { InsuranceHeadline } from './components/InsuranceHeadline/InsuranceHeadline';
import { InsuranceInfo } from './components/InsuranceInfo/InsuranceInfo';
import { Rights } from './components/Rights/Rights';
import { Work } from './components/Work/Work';
import { InsuranceAbout } from './components/InsuranceAbout/InsuranceAbout';
import { Advantages } from './components/Advantages/Advantages';

function App() {

  const isMobile = useMediaQuery('(min-width:1300px)');

  const styles = {
    main: {
      height: "auto",
      backgroundColor: "#ffffff",
      backgroundImage: "url(" + "/office-background.jpg" + ")",
      backgroundPosition: 'bottom',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      justifyContent: "center",
      fontSize: isMobile ? "16px" : "14px"
    }
  }

  return (
    <Routes>

      <Route path="/home" element={
        <div style={styles.main}>
          <Nav />
          <Title />
          <HomeAbout/>
          <Activity />
          <Values />
          <Partners />
          <Blog />
          <Footer />
        </div>
      } />

      <Route path="/recuperacao-judicial" element={
        <div style={styles.main}>
          <Nav />
          <RecoveryHeadline />
          <Information />
          <Cards />
          <Steps />
          <Swipers />
          <Contact />
          <Footer />
        </div>
      } />

      <Route path="/securitario" element={
        <div style={styles.main}>
          <Nav />
          <InsuranceHeadline />
          <InsuranceInfo/>
          <Rights/>
          <Work/>
          <InsuranceAbout/>
          <Advantages/>
          <Contact/>
          <Footer />
        </div>
      } />

    </Routes>
  );
}

export default App;