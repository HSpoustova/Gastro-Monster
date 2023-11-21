import './style.css';
import { SetQuestion } from '../../components/SetQuestion';
import { Header } from '../../components/Header';

export const Quiz = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <SetQuestion />
      </div>
    </>
  );
};
