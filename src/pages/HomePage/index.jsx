import './style.css';
import { DiaryProduct } from '../../components/DiaryProduct';

export const HomePage = () => {
  return (
    <div className="container">
      <DiaryProduct />
      <DiaryProduct />
      <DiaryProduct />
    </div>
  );
};
