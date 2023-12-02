import './style.css';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import nadpis from './img/nadpis.png';
import nav from './img/nav.png';
import { SleepingMaskot } from '../../components/SleepingMaskot';

export const HomePage = () => {
  return (
    <>
      <Header pic={nadpis} showPic={true} />
      <div className="container-homePage">
        <Nav text="Hrát" to="/fieldPick" backgroundImage={nav} />
        <Nav
          text="O nás"
          to="https://super-sable-baa73c.netlify.app"
          backgroundImage={nav}
        />
        <Nav text="Pravidla" to="/rules" backgroundImage={nav} />
      </div>
      <SleepingMaskot />
    </>
  );
};
