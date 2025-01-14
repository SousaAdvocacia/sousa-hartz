import { Nav } from '../components/Nav/Nav';
import { Title } from '../components/HomeHeadline/HomeHeadline';
import { HomeAbout } from '../components/HomeAbout/HomeAbout';
import { Areas } from '../components/Areas/Areas';
import { Values } from '../components/Values/Values';
import { Partners } from '../components/Partners/Partners';
import { Blog } from '../components/Blog/Blog';
import { Footer } from '../components/Footer/Footer';

export const Home = () => {

    return (
        <div>
            <Nav />
            <Title />
            <HomeAbout />
            <Areas />
            <Values />
            <Partners />
            <Footer />
        </div>
    )
}