import './style.css';
import { SetQuestion } from '../../components/SetQuestion';

export const HomePage = () => {
  return (
    <>
      <header>
        <h1>Gastro monster kvíz</h1>
      </header>
      <div className="container">
        <SetQuestion />
      </div>
    </>
  );
};
