import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { useMaskot } from '../../components/useMaskot';
import './style.css';
import maskotAdultNeutral from './img/maskot-adult-neutral.png';

export const FieldPick = () => {
  const { isVisible, maskotRef } = useMaskot(2000);

  return (
    <>
      <Header />
      <div className="container">
        <h2>Ahoj, vyber si oblast!</h2>
        <div className="circle">
          <Link to="/quiz" className="slice slice1">
            <span className="slice-text">Maso</span>
          </Link>
          <Link to="/quiz" className="slice slice2">
            <span className="slice-text">Mléko</span>
          </Link>
          <Link to="/quiz" className="slice slice3">
            <span className="slice-text">Ovoce</span>
          </Link>
          <Link to="/quiz" className="slice slice4">
            <span className="slice-text">Zelenina</span>
          </Link>
        </div>
        <div ref={maskotRef} className={`maskot ${isVisible ? 'active' : ''}`}>
          <img className="maskot-pic" src={maskotAdultNeutral} alt="Maskot" />
        </div>
      </div>
    </>
  );
};
