import { Title } from '../components/Title/Ttitle';
import { HomeAbout } from '../components/HomeAbout/HomeAbout';
import { Areas } from '../components/Areas/Areas';
import { Values } from '../components/Values/Values';
import { HomeInfo } from '../components/HomeInfo/HomeInfo';

export const Home = () => {

    return (
        <div>
            <Title />
            <HomeInfo />
            <HomeAbout />
            <Areas />
            <Values />
        </div>
    )
}