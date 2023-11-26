import './style.css';
import { Map } from '../../pages/Map';

export const ButtonMap = ({ id, name, classes }) => {
  return (
    <div>
      <button className={classes} key={id}>
        {name}
      </button>
    </div>
  );
};
