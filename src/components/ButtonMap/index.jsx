import './style.css';
import { Map } from '../../pages/GameMap';

export const ButtonMap = ({ id, name, classes }) => {
  return (
    <div>
      <button className={classes} key={id}>
        {name}
      </button>
    </div>
  );
};
