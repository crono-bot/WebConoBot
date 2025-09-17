import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onHeightChange }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        onHeightChange(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [onHeightChange]);

  return (
    <header className="header" ref={headerRef}>
      <Link to="/" className="logo-link">Mi App</Link>
      <nav className="nav-menu">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/about" className="nav-link">Nosotros</Link>
        {/* Usamos enlaces de React Router */}
        <a href="#services" className="nav-link">Servicios</a>
        <a href="#contact" className="nav-link">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;