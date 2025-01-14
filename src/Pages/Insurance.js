import { Nav } from '../components/Nav/Nav';
import { InsuranceHeadline } from '../components/InsuranceHeadline/InsuranceHeadline';
import { InsuranceInfo } from '../components/InsuranceInfo/InsuranceInfo';
import { Rights } from '../components/Rights/Rights';
import { Work } from '../components/Work/Work';
import { InsuranceAbout } from '../components/InsuranceAbout/InsuranceAbout';
import { Advantages } from '../components/Advantages/Advantages';
import { RecoveryContact } from '../components/RecoveryContact/RecoveryContact';
import { Footer } from '../components/Footer/Footer';

export const Insurance = () => {
    return (
        <div>
            <Nav />
            <InsuranceHeadline />
            <InsuranceInfo />
            <Rights />
            <Work />
            <InsuranceAbout />
            <Advantages />
            <RecoveryContact />
            <Footer />
        </div>
    )
}