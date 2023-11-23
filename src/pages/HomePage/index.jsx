import './style.css';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';

export const HomePage = () => {
  return (
    <>
      <Header text='Gastro monster'/>
      <div className="container-homePage">
        <Nav text='Hrát' to='/fieldPick'/> 
        <Nav text='Nastavení' to='/fieldPick'/> 
        <Nav text='Hrát' to='/fieldPick'/> 
        <Nav text='Hrát' to='/fieldPick'/> 
      </div>
    </>
  );
};
