import Slider from 'react-slick';
import './HeroSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Usando imágenes de Pexels como placeholder
const sliderContent = [
  {
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Innovación Tecnológica a tu Alcance',
    subtitle: 'Implementamos las últimas tecnologías para un rendimiento óptimo y soluciones escalables.',
    buttonText: 'Conoce Más'
  },
  {
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Soluciones Digitales que Impulsan tu Negocio',
    subtitle: 'Desarrollamos experiencias web y aplicaciones móviles a la medida de tus necesidades.',
    buttonText: 'Contáctanos Ahora'
  },
  {
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Diseño Vanguardista y Funcional',
    subtitle: 'Transformamos tus ideas en interfaces intuitivas y atractivas.',
    buttonText: 'Ver Proyectos'
  }
];

const HeroSection = ({ headerHeight }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  };

  // Calcula la altura dinámicamente
  const heroStyle = {
    height: `calc(100vh - ${headerHeight}px)`
  };

  return (
    <section className="hero" style={heroStyle}>
      <Slider {...settings} className="hero-slider">
        {sliderContent.map((slide, index) => (
          <div key={index} className="slider-item">
            <div 
              className="slider-background"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay"></div>
              <div className="content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <button className="primary-button">{slide.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;