import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        Mi App
      </Link>
      <nav className="nav-menu">
        <Link to="/" className="nav-link">
          Inicio
        </Link>
        <Link to="/about" className="nav-link">
          Nosotros
        </Link>
        <Link to="/services" className="nav-link">
          Servicios
        </Link>
        <Link to="/contact" className="nav-link">
          Contacto
        </Link>
      </nav>
    </header>
  );
};

export default Header;