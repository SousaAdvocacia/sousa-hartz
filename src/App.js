import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { Insurance } from './Pages/Insurance';
import { Recovery } from './Pages/Recovery';
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact';
import { Activity } from './Pages/Activity';

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
      fontSize: isMobile ? "16px" : "14px",
      scrollBehavior: "smooth"
    }
  }

  return (

    <div style={styles.main}>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/recuperacao-judicial" element={<Recovery />} />
        <Route path="/securitario" element={<Insurance />} />

      </Routes>

    </div>
  );
}

export default App;