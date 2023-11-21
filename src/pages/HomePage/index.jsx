import './style.css';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Link to="/fieldPick">Hrát</Link>
      </div>
    </>
  );
};
