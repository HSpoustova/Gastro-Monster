import './style.css';
import { DairySetQuestion } from '../../components/DairySetQuestion';

export const HomePage = () => {
  return (
    <>
      <header>
        <h1>Gastro monster kvíz</h1>
      </header>
      <div className="container">
        <DairySetQuestion />
      </div>
    </>
  );
};
