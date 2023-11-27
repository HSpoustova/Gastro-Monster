import './style.css';
import { Link } from 'react-router-dom';

export const Button = ({ text, to, backgroundImage }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})` 
  };

  return (
    <div className="button-background" style={backgroundStyle}>
      <Link to={to} className="button-link">{text}</Link>
    </div>
  );
}
