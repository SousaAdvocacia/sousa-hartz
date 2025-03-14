import { Title } from '../components/HomeHeadline/HomeHeadline';
import { HomeAbout } from '../components/HomeAbout/HomeAbout';
import { Areas } from '../components/Areas/Areas';
import { Values } from '../components/Values/Values';

export const Home = () => {

    return (
        <div>
            <Title />
            <HomeAbout />
            <Areas />
            <Values />
        </div>
    )
}