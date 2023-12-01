import './style.css';
import { SetQuestion } from '../../components/SetQuestion';
import { useParams } from 'react-router-dom';
import {
  bakeryData,
  dairyData,
  fruitVegData,
  meatData,
} from '../../components/Data';
import button from '../FieldPick/img/button.png';
import { Button } from '../../components/Button';
import { GameMap } from '../GameMap';
import { useEffect } from 'react';

const getData = () => {
  const { setData } = useParams();

  switch (setData) {
    case 'milk':
      return ['milk', dairyData];
    case 'meat':
      return ['meat', meatData];
    case 'vegfruit':
      return ['vegfruit', fruitVegData];
    case 'bakery':
      return ['bakery', bakeryData];
    default:
      window.location.replace('/FieldPick');
  }
};

export const Quiz = () => {
  useEffect(() => {
    // Přidání třídy při zobrazení komponenty
    document.body.classList.add('custom-background');
    return () => {
      document.body.classList.remove('custom-background');
    };
  }, []);

  return (
    <div>
      <div className="navButtons">
        <Button text="Zpět" to="/fieldPick" backgroundImage={button} />
        <Button text="Konec" to="/" backgroundImage={button} />
      </div>
      <div className="container">
        <GameMap data={getData()} />
      </div>
    </div>
  );
};
