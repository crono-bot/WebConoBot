import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import FeatureCard from '../components/common/FeatureCard';
import CtaSection from '../components/sections/CtaSection';
import './ServicesPage.css';

// Mover datos estáticos fuera del componente
const SERVICES_DATA = [
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

const COURSES_DATA = [
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

// Componente memoizado para el contenido de pestañas
const TabContent = React.memo(({ service, isActive }) => {
  if (!isActive) return null;

  return (
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
        </div>
      </div>
    </div>
  );
});

// Componente memoizado para navegación de pestañas
const TabNavigation = React.memo(({ services, activeTab, onTabChange }) => {
  return (
    <div className="tabs-navigation">
      {services.map((service, index) => (
        <button
          key={index}
          className={`tab-nav ${activeTab === index ? 'active' : ''} ${service.gradient}`}
          onClick={() => onTabChange(index)}
        >
          <span className="nav-icon">{service.icon}</span>
          <span className="nav-text">{service.title}</span>
        </button>
      ))}
    </div>
  );
});

// Nuevo componente para Hero Section mejorado - ORDEN CORREGIDO EN RESPONSIVE
const HeroSection = React.memo(({ isVisible }) => {
  return (
    <section className={`services-hero ${isVisible ? 'visible' : ''}`}>
      <div className="hero-background"></div>
      <div className="hero-container">
        <div className="hero-content">
          {/* TEXTO PRIMERO - En desktop va a la izquierda, en móvil arriba */}
          <div className="hero-text">
            <h1 className="hero-title">
              Conviértete en 
              <span className="gradient-text"> QA Expert</span>
            </h1>
            <p className="hero-subtitle">
              Domina las herramientas y metodologías más demandadas del mercado. 
              <strong> 95% de nuestros estudiantes consiguen empleo en menos de 3 meses.</strong>
            </p>
            
            <div className="hero-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">✅</span>
                <span>Certificación internacional</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">✅</span>
                <span>Mentoría 1:1 con expertos</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">✅</span>
                <span>Acceso de por vida</span>
              </div>
            </div>

            <div className="hero-actions">
              <button className="hero-cta primary">
                Comenzar Ahora
                <span className="cta-arrow">→</span>
              </button>
              <button className="hero-cta secondary">
                Ver Plan de Estudios
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">2,000+</span>
                <span className="stat-label">Estudiantes</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Empleabilidad</span>
              </div>
            </div>
          </div>
          
          {/* CUADRO VISUAL SEGUNDO - En desktop a la derecha, en móvil abajo */}
          <div className="hero-visual">
            <div className="main-visual">
              <div className="visual-content">
                <div className="tech-stack">
                  <span className="tech-item">Selenium</span>
                  <span className="tech-item">Playwright</span>
                  <span className="tech-item">Appium</span>
                  <span className="tech-item">JMeter</span>
                </div>
                <div className="certificate-badge">
                  <span className="certificate-icon">🏆</span>
                  <span>Certificación QA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const carouselIntervalRef = useRef(null);

  // Usar useMemo para datos estáticos
  const services = useMemo(() => SERVICES_DATA, []);
  const courses = useMemo(() => COURSES_DATA, []);

  // Calcular valores derivados con useMemo
  const totalSlides = useMemo(() => 
    Math.ceil(courses.length / slidesToShow), 
    [courses.length, slidesToShow]
  );

  const slideWidth = useMemo(() => 100 / slidesToShow, [slidesToShow]);

  // Intersection Observer optimizado
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Lógica del carrusel optimizada
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
    };

    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    handleResize();
    window.addEventListener('resize', debouncedResize);
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Auto-slide del carrusel
  useEffect(() => {
    if (totalSlides <= 1 || isPaused) {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
      return;
    }
    
    carouselIntervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
    };
  }, [totalSlides, isPaused]);

  // useCallback para funciones
  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1
    );
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex <= 0 ? totalSlides - 1 : prevIndex - 1
    );
  }, [totalSlides]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const handleTabChange = useCallback((index) => {
    setActiveTab(index);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  return (
    <div className="services-container" ref={sectionRef}>
      {/* Nuevo Hero Section mejorado - ORDEN CORREGIDO */}
      <HeroSection isVisible={isVisible} />

      {/* Services Tabs Section */}
      <section className="services-tabs-section">
        <div className="section-header">
          <h2>Nuestras Especialidades</h2>
          <p>Elige tu camino en el mundo del Quality Assurance</p>
        </div>

        <div className="tabs-container">
          <TabNavigation 
            services={services}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          <div className="tab-content-wrapper">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`tab-content ${activeTab === index ? 'active' : ''}`}
              >
                <TabContent service={service} isActive={activeTab === index} />
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
      <CtaSection />
    </div>
  );
};

export default React.memo(ServicesPage);