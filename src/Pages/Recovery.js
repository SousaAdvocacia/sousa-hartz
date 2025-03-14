import { RecoveryHeadline } from '../components/RecoveryHeadline/RecoveryHeadline';
import { RecoveryInfo } from '../components/RecoveryInfo/RecoveryInfo';
import { Cards } from '../components/Cards/Cards';
import { Steps } from '../components/Steps/Steps';
import { Swipers } from '../components/Swipers/Swipers';
import { RecoveryContact } from '../components/RecoveryContact/RecoveryContact';
import { CardsMobile } from '../components/CardsMobile/CardsMobile';
import { useMediaQuery } from '@mui/material';
import { RecoveryAccordion } from '../components/RecoveryAccordion/RecoveryAccordion';

export const Recovery = () => {

    const isDesktop = useMediaQuery('(min-width:1000px)');
    
    return (
        <div>
            <RecoveryHeadline />
            <RecoveryAccordion />
            <RecoveryInfo />
            {isDesktop ? <Cards /> : <CardsMobile />}
            <Steps />
            <Swipers />
            <RecoveryContact />
        </div>
    )
}