import Slider from 'react-slick';
import './HeroSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 👇 importa las imágenes desde assets
import hero1 from '../../assets/bg-hero-1.jpg';
import hero2 from '../../assets/bg-hero-2.jpg';
import hero3 from '../../assets/bg-hero-3.jpg';

const sliderContent = [
  {
    image: hero1,
    title: 'Soluciones Digitales que Impulsan tu Negocio',
    subtitle: 'Desarrollamos experiencias web y aplicaciones móviles a la medida de tus necesidades.',
    buttonText: 'Contáctanos Ahora'
  },
  {
    image: hero2,
    title: 'Diseño Vanguardista y Funcional',
    subtitle: 'Transformamos tus ideas en interfaces intuitivas y atractivas.',
    buttonText: 'Ver Proyectos'
  },
  {
    image: hero3,
    title: 'Innovación Tecnológica a tu Alcance',
    subtitle: 'Implementamos las últimas tecnologías para un rendimiento óptimo.',
    buttonText: 'Conoce Más'
  }
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  return (
    <section className="hero">
      <Slider {...settings} className="hero-slider">
        {sliderContent.map((slide, index) => (
          <div
            key={index}
            className="slider-item"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>
            <div className="content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <button className="primary-button">{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
