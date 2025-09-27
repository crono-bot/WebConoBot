import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">🚀 Cronobot</h2>
        <nav className="footer-links">
          <a href="#">Inicio</a>
          <a href="#">Sobre nosotros</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
        </nav>
        <div className="footer-social">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
