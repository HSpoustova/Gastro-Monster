import './style.css';
import { DiaryProduct } from '../../components/DiaryProduct';

export const HomePage = () => {
  
  return (
    <>
    <header>
    <h1>Gastro monster kvíz</h1>
  </header>
    <div className="container">
      <DiaryProduct />
    </div>
    </>
  );
};
