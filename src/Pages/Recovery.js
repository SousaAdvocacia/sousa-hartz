import { Nav } from '../components/Nav/Nav';
import { RecoveryHeadline } from '../components/RecoveryHeadline/RecoveryHeadline';
import { Information } from '../components/Information/Information';
import { Cards } from '../components/Cards/Cards';
import { Steps } from '../components/Steps/Steps';
import { Swipers } from '../components/Swipers/Swipers';
import { RecoveryContact } from '../components/RecoveryContact/RecoveryContact';
import { Footer } from '../components/Footer/Footer';
import { CardsMobile } from '../components/CardsMobile/CardsMobile';
import { useMediaQuery } from '@mui/material';

export const Recovery = () => {

    const isMobile = useMediaQuery('(min-width:1000px)');
    
    return (
        <div>
            <Nav />
            <RecoveryHeadline />
            <Information />
            {isMobile ? <Cards /> : <CardsMobile />}
            <Steps />
            <Swipers />
            <RecoveryContact />
            <Footer />
        </div>
    )
}