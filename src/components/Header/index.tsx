import { Link } from 'react-router-dom';
import logo from '../../assets/fxdigitallogo.png';

export const Header = () => (
  <header>
    <nav>
      <img src={logo} alt="logo" />
      <Link to="/">Home</Link>
    </nav>
  </header>
);

export default Header;
