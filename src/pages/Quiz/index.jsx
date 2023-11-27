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
import button from '../FieldPick/img/button.png'
import { Button } from '../../components/Button';

const getData = () => {
  const { setData } = useParams();

  switch (setData) {
    case 'milk':
      return dairyData;
    case 'meat':
      return meatData;
    case 'fruitveg':
      return fruitVegData;
    case 'bakery':
      return bakeryData;
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
        <SetQuestion array={getData()} />
      </div>
    </>
  );
};
