import { useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ onHeightChange }) => {
  const headerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate(); // Añadir useNavigate

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

  // Función para manejar el scroll suave a secciones SOLO en la página de inicio
  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Si no estamos en la página de inicio, navegamos primero a home con el hash
      navigate(`/#${sectionId}`);
    } else {
      // Si estamos en home, hacemos scroll suave
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Actualizar la URL con el hash sin hacer scroll adicional
        window.history.pushState(null, null, `#${sectionId}`);
      }
    }
  };

  // Función para determinar si el enlace está activo
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header" ref={headerRef}>
      <Link to="/" className="logo-link">Mi App</Link>
      <nav className="nav-menu">
        <Link 
          to="/" 
          className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
        >
          Inicio
        </Link>
        
        <Link 
          to="/about" 
          className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
        >
          Nosotros
        </Link>
        
        <Link 
          to="/services" 
          className={`nav-link ${isActiveLink('/services') ? 'active' : ''}`}
        >
          Servicios
        </Link>
        
        <Link 
          to="/contact" 
          className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
        >
          Contacto
        </Link>

      </nav>
    </header>
  );
};

export default Header;