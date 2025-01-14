import { Nav } from '../components/Nav/Nav';
import { Title } from '../components/HomeHeadline/HomeHeadline';
import { HomeAbout } from '../components/HomeAbout/HomeAbout';
import { Areas } from '../components/Areas/Areas';
import { Values } from '../components/Values/Values';
import { Footer } from '../components/Footer/Footer';

export const Home = () => {

    return (
        <div>
            <Nav />
            <Title />
            <HomeAbout />
            <Areas />
            <Values />
            <Footer />
        </div>
    )
}