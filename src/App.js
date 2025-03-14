import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { Insurance } from './Pages/Insurance';
import { Recovery } from './Pages/Recovery';
import { Home } from './Pages/Home';
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';
import { NavMobile } from './components/NavMobile/NavMobile';

function App() {

  const isDesktop = useMediaQuery('(min-width:1300px)');

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
      fontSize: isDesktop ? "16px" : "14px",
      scrollBehavior: "smooth"
    }
  }

  return (

    <div style={styles.main}>

      {isDesktop ? <Nav/> : <NavMobile/>}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/recuperacao-judicial" element={<Recovery />} />
        <Route path="/securitario" element={<Insurance />} />

      </Routes>

      <Footer/>

    </div>
  );
}

export default App;