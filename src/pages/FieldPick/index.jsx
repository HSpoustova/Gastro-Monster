import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { useMaskot } from '../../components/useMaskot';
import './style.css';
import maskotAdultNeutral from './img/maskot-adult-neutral.png';
import { Nav } from '../../components/Nav';
import { Button } from '../../components/Button';
import button from './img/button.png';

export const FieldPick = () => {
  const { isVisible, isTextVisible, text, maskotRef, textRef } = useMaskot({
    delay: 500,
    textProp: 'Mám hlad!',
  });

  return (
    <>
      <div className="navButtons">
        <Button text="Konec" to="/" backgroundImage={button} />
      </div>
      <div className="container-fieldPick">
        <Header text="Ahoj! Vyber si oblast" showPic={false} />
        <div className="circle">
          <Link to="/quiz/milk" className="slice slice1">
            <span className="slice-text">Mléko</span>
          </Link>
          <Link to="/quiz/meat" className="slice slice2">
            <span className="slice-text">Maso</span>
          </Link>
          <Link to="/quiz/vegfruit" className="slice slice3">
            <span className="slice-text">
              Ovoce
              <br />
              Zelenina
            </span>
          </Link>
          <Link to="/quiz/bakery" className="slice slice4">
            <span className="slice-text">Pečivo</span>
          </Link>
        </div>
        <div className="maskot-container">
          {isTextVisible && (
            <div ref={textRef} className="maskot-text-bubble">
              {text}
            </div>
          )}
          <div
            ref={maskotRef}
            className={`maskot ${isVisible ? 'active' : ''}`}
          >
            <img className="maskot-pic" src={maskotAdultNeutral} alt="Maskot" />
          </div>
        </div>
      </div>
    </>
  );
};
