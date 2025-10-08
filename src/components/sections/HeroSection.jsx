import Slider from 'react-slick';
import './HeroSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header1 from '../../imagenes/header-1.jpg';
import Header2 from '../../imagenes/header-2.jpg';
import Header3 from '../../imagenes/header-3.jpeg';

// Contenido específico para QA Testing
const sliderContent = [
  {
    image: Header1,
    title: 'Conviértete en Experto en QA Testing',
    subtitle: 'Domina las técnicas más demandadas del mercado y asegura la calidad de software con nuestros cursos especializados.',
    buttonText: 'Ver Cursos'
  },
  {
    image: Header2,
    title: 'Aprende Testing con Metodologías Ágiles',
    subtitle: 'Formación práctica en testing manual, automatizado y de rendimiento con instructores expertos del sector.',
    buttonText: 'Comenzar Ahora'
  },
  {
    image: Header3,
    title: 'Impulsa tu Carrera en Control de Calidad',
    subtitle: 'Certificaciones reconocidas que te preparan para los desafíos reales de la industria tecnológica.',
    buttonText: 'Más Información'
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