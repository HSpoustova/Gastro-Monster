import './style.css';
import { Link } from 'react-router-dom';

export const Nav = ({ text, to, backgroundImage }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})` 
  };

  return (
    <div className="nav-background" style={backgroundStyle}>
      <Link to={to} className="nav-link">{text}</Link>
    </div>
  );
}
