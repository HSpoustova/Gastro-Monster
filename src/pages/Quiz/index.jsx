import './style.css';
import { SetQuestion } from '../../components/SetQuestion';
import { Header } from '../../components/Header';
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
  return (
    <>
      <div className="navButtons">
        <Button text="Konec" to="/" backgroundImage={button} />
        <Button text="Zpět" to="/" backgroundImage={button} />
      </div>
      <div className="container">
        <GameMap data={getData()} />
      </div>
    </>
  );
};
