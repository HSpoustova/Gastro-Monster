import './style.css';
import { Link } from 'react-router-dom';

export const Nav = ({ text, to }) => {
  return (
    <div className="nav-background">
      <Link to={to} className="nav-link">{text}</Link>
    </div>
  );
}
