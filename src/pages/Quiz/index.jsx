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
      <Header />
      <div className="container">
        <SetQuestion array={getData()} />
      </div>
    </>
  );
};
