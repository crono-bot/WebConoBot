import React, { useState, useEffect, useRef } from 'react';
import FeatureCard from '../components/common/FeatureCard';
import './ServicesPage.css';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [totalSlides, setTotalSlides] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      title: "Cursos de QA Manual",
      icon: "🔍",
      description: "Aprende las técnicas fundamentales de testing manual con nuestros cursos especializados.",
      features: [
        "Diseño de casos de prueba",
        "Técnicas de reporte de bugs",
        "Pruebas de usabilidad y aceptación",
        "Creación de plan de pruebas"
      ],
      gradient: "gradient-1"
    },
    {
      title: "QA Automation",
      icon: "🤖",
      description: "Domina las herramientas más demandadas en automatización de pruebas.",
      features: [
        "Selenium WebDriver",
        "Frameworks de testing",
        "Integración continua",
        "Pruebas en múltiples navegadores"
      ],
      gradient: "gradient-2"
    },
    {
      title: "Performance Testing",
      icon: "⚡",
      description: "Aprende a medir y mejorar el rendimiento de aplicaciones y sistemas.",
      features: [
        "Pruebas de carga y estrés",
        "Herramientas como JMeter",
        "Análisis de resultados",
        "Optimización de rendimiento"
      ],
      gradient: "gradient-3"
    },
    {
      title: "Mobile Testing",
      icon: "📱",
      description: "Especialízate en testing para aplicaciones móviles en diferentes plataformas.",
      features: [
        "Testing en iOS y Android",
        "Pruebas en dispositivos reales",
        "Automation con Appium",
        "Pruebas de conectividad"
      ],
      gradient: "gradient-4"
    },
    {
      title: "Security Testing",
      icon: "🔒",
      description: "Conviértete en experto en pruebas de seguridad y vulnerabilidades.",
      features: [
        "Pruebas de penetración",
        "Análisis de vulnerabilidades",
        "OWASP Top 10",
        "Herramientas de seguridad"
      ],
      gradient: "gradient-5"
    },
    {
      title: "Metodologías Ágiles",
      icon: "🔄",
      description: "Integra el testing en entornos de desarrollo ágil y DevOps.",
      features: [
        "Testing en Scrum y Kanban",
        "Pruebas en DevOps",
        "Calidad continua",
        "Colaboración con desarrollo"
      ],
      gradient: "gradient-6"
    }
  ];

  const courses = [
    {
      title: "QA Intensivo",
      description: "Domina los fundamentos del aseguramiento de la calidad de software desde cero.",
      price: "$199.99",
      isFeatured: true,
      imageUrl: "https://pandorafms.com/blog/wp-content/uploads/2022/02/QA-1.png",
      badge: "Más Popular"
    },
    {
      title: "Automatización APIs con Karate",
      description: "Aprende a automatizar pruebas de API de forma rápida y sencilla con la herramienta Karate.",
      price: "$149.99",
      isFeatured: false,
      imageUrl: "https://cdn.prod.website-files.com/5ff9f08a3928de42db400872/6390b4f99767824dce49d001_01.png",
      badge: "Nuevo"
    },
    {
      title: "Automatización Mobile con Appium",
      description: "Crea scripts de automatización para aplicaciones móviles en iOS y Android.",
      price: "$179.99",
      isFeatured: false,
      imageUrl: "https://www.automatetheplanet.com/wp-content/uploads/2018/10/getting_started_appium_-android.jpg",
      badge: "Trending"
    },
    {
      title: "Automatización Web con Playwright",
      description: "Pruebas end-to-end de alta velocidad y fiabilidad en navegadores modernos.",
      price: "$159.99",
      isFeatured: false,
      imageUrl: "https://img-c.udemycdn.com/course/750x422/5064138_5362_4.jpg",
      badge: "Recomendado"
    }
  ];

  // Intersection Observer para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Lógica del carrusel
  useEffect(() => {
    const handleResize = () => {
      let newSlidesToShow;
      
      if (window.innerWidth >= 1900) {
        newSlidesToShow = 4;
      } else if (window.innerWidth >= 992) {
        newSlidesToShow = 3;
      } else if (window.innerWidth >= 768) {
        newSlidesToShow = 2;
      } else {
        newSlidesToShow = 1;
      }
      
      setSlidesToShow(newSlidesToShow);
      setTotalSlides(Math.ceil(courses.length / newSlidesToShow));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [courses.length]);

  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        return prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides, isPaused]);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => {
      return prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => {
      return prevIndex <= 0 ? totalSlides - 1 : prevIndex - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const slideWidth = 100 / slidesToShow;

  return (
    <div className="services-container" ref={sectionRef}>
      {/* Hero Section */}
      <section className={`services-hero ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transforma tu Carrera en 
              <span className="gradient-text"> Quality Assurance</span>
            </h1>
            <p className="hero-subtitle">
              Cursos especializados diseñados por expertos de la industria. 
              Domina las herramientas y metodologías más demandadas del mercado.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Tasa de empleabilidad</span>
              </div>
              <div className="stat">
                <span className="stat-number">2,000+</span>
                <span className="stat-label">Estudiantes graduados</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Rating promedio</span>
              </div>
            </div>
            <button className="hero-cta">
              Explorar Cursos
              <span className="cta-arrow">→</span>
            </button>
          </div>
          <div className="hero-visual">
            <div className="floating-cards">
              <div className="floating-card card-1">
                <span className="card-icon">🔍</span>
                <span>QA Manual</span>
              </div>
              <div className="floating-card card-2">
                <span className="card-icon">🤖</span>
                <span>Automation</span>
              </div>
              <div className="floating-card card-3">
                <span className="card-icon">⚡</span>
                <span>Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section - CORREGIDO */}
      <section className="services-tabs-section">
        <div className="section-header">
          <h2>Nuestras Especialidades</h2>
          <p>Elige tu camino en el mundo del Quality Assurance</p>
        </div>

        <div className="tabs-container">
          <div className="tabs-navigation">
            {services.map((service, index) => (
              <button
                key={index}
                className={`tab-nav ${activeTab === index ? 'active' : ''} ${service.gradient}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="nav-icon">{service.icon}</span>
                <span className="nav-text">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Contenido de la pestaña activa - CORREGIDO */}
          <div className="tab-content-wrapper">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`tab-content ${activeTab === index ? 'active' : ''}`}
              >
                <div className={`service-detail ${service.gradient}`}>
                  <div className="detail-info">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    
                    <div className="features-grid">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="feature-item">
                          <span className="feature-check">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="action-buttons">
                      <button className="btn-primary">Ver Curso Completo</button>
                      <button className="btn-secondary">Descargar Temario</button>
                    </div>
                  </div>
                  
                  <div className="detail-visual">
                    <div className="visual-card">
                      <div className="card-glow"></div>
                      <span className="visual-icon">{service.icon}</span>
                      <div className="floating-elements">
                        <div className="element-1"></div>
                        <div className="element-2"></div>
                        <div className="element-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Carousel Section */}
      <section className="courses-carousel-section">
        <div className="section-header">
          <h2>Cursos Destacados</h2>
          <p>Los programas más populares entre nuestros estudiantes</p>
        </div>

        <div 
          className="carousel-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="carousel-wrapper">
            <button 
              className="carousel-button prev" 
              onClick={prevSlide} 
              aria-label="Anterior"
            >
              ‹
            </button>
            
            <div className="carousel">
              <div 
                className="carousel-inner" 
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {courses.map((course, index) => (
                  <div 
                    key={index} 
                    className="carousel-item"
                    style={{ width: `${slideWidth}%` }}
                  >
                    <FeatureCard
                      title={course.title}
                      description={course.description}
                      price={course.price}
                      isFeatured={course.isFeatured}
                      imageUrl={course.imageUrl}
                      badge={course.badge}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="carousel-button next" 
              onClick={nextSlide} 
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>
          
          {totalSlides > 1 && (
            <div className="carousel-dots">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Listo para comenzar tu viaje en QA?</h2>
          <p>Únete a miles de estudiantes que ya transformaron su carrera</p>
          <div className="cta-buttons">
            <button className="cta-primary">Comienza Ahora</button>
            <button className="cta-secondary">Agendar Consultoría Gratuita</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;