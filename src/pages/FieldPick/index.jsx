import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { useMaskot } from '../../components/useMaskot';
import './style.css';
import maskotAdultNeutral from './img/maskot-adult-neutral.png';

export const FieldPick = () => {
  const { isVisible, isTextVisible, text, maskotRef, textRef } = useMaskot({ delay: 500, textProp: "Mám hlad!" });

  return (
    <>
      <Header />
      <div className="container-fieldPick">
        <h2>Ahoj, vyber si oblast!</h2>
        <div className="circle">
          <Link to="/quiz" className="slice slice1">
            <span className="slice-text">Mléko</span>
          </Link>
          <Link to="/quiz" className="slice slice2">
            <span className="slice-text">Maso</span>
          </Link>
          <Link to="/quiz" className="slice slice3">
            <span className="slice-text">Ovoce<br/>Zelenina</span>
          </Link>
          <Link to="/quiz" className="slice slice4">
            <span className="slice-text">Pečivo</span>
          </Link>
        </div>
        <div className="maskot-container">
          {isTextVisible && (
            <div ref={textRef} className="maskot-text-bubble">
              {text}
            </div>
          )}
          <div ref={maskotRef} className={`maskot ${isVisible ? 'active' : ''}`}>
            <img className="maskot-pic" src={maskotAdultNeutral} alt="Maskot" />
          </div>
        </div>
      </div>
    </>
  );
};
