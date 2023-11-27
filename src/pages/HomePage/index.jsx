import './style.css';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import nadpis from './img/nadpis.png'
import nav from './img/nav.png'


export const HomePage = () => {
  return (
    <>
      <Header pic={nadpis} showPic={true}/>
      <div className="container-homePage">
        <Nav text='Hrát' to='/fieldPick' backgroundImage={nav}/> 
        <Nav text='Nastavení' to='/fieldPick' backgroundImage={nav}/> 
        <Nav text='Hrát' to='/fieldPick' backgroundImage={nav}/> 
        <Nav text='Hrát' to='/fieldPick'backgroundImage={nav}/> 
      </div>
    </>
  );
};
