import { useState, useEffect, useRef } from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const revealRefs = useRef([]);
  
  // Datos para la línea de tiempo
  const timelineData = [
    {
      year: "2018",
      title: "Fundación",
      description: "Comenzamos nuestro viaje con la visión de revolucionar la educación en testing y automatización."
    },
    {
      year: "2019",
      title: "Primer Curso Lanzado",
      description: "Lanzamos nuestro primer curso de QA Manual que rápidamente ganó popularidad."
    },
    {
      year: "2020",
      title: "Expansión de Contenidos",
      description: "Incorporamos cursos de automatización con las herramientas más demandadas del mercado."
    },
    {
      year: "2022",
      title: "Alianzas Internacionales",
      description: "Establecimos alianzas con empresas tecnológicas líderes para certificaciones reconocidas."
    },
    {
      year: "2023",
      title: "Plataforma Propia",
      description: "Lanzamos nuestra propia plataforma de aprendizaje con tecnología interactiva."
    }
  ];

  // Datos del equipo
  const teamData = [
    {
      name: "María Rodríguez",
      role: "Fundadora & CEO",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Más de 10 años de experiencia en QA y automatización. Ex-Líder de QA en empresas Fortune 500."
    },
    {
      name: "Carlos Méndez",
      role: "Director de Contenidos",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Especialista en desarrollo de curriculum educativo con enfoque en habilidades prácticas."
    },
    {
      name: "Ana López",
      role: "Instructora Principal",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Automation Engineer con certificaciones en Selenium, Playwright y Appium."
    }
  ];

  // Valores de la empresa
  const valuesData = [
    {
      icon: "🚀",
      title: "Innovación Constante",
      description: "Mantenemos nuestros contenidos actualizados con las últimas tendencias y tecnologías del mercado."
    },
    {
      icon: "🎯",
      title: "Enfoque Práctico",
      description: "Nuestros cursos se centran en habilidades aplicables inmediatamente en entornos laborales reales."
    },
    {
      icon: "🤝",
      title: "Comunidad",
      description: "Creemos en el poder de la colaboración y networking entre estudiantes y profesionales."
    },
    {
      icon: "📈",
      title: "Crecimiento",
      description: "Nos comprometemos con el desarrollo profesional continuo de nuestros estudiantes."
    }
  ];

  // Preguntas frecuentes
  const faqData = [
    {
      question: "¿Qué hace diferentes a sus cursos?",
      answer: "Nuestros cursos se enfocan 100% en práctica real, con proyectos que simulan entornos laborales actuales. Además, ofrecemos mentoría personalizada y acceso a una comunidad activa de profesionales."
    },
    {
      question: "¿Ofrecen certificación reconocida?",
      answer: "Sí, al finalizar nuestros cursos obtienes una doble certificación: nuestro certificado de finalización y una credencial de Google Developers que valida tus habilidades a nivel internacional."
    },
    {
      question: "¿Qué nivel de experiencia necesito?",
      answer: "Tenemos cursos para todos los niveles. Desde principiantes absolutos hasta profesionales que buscan especializarse en áreas específicas de automatización."
    },
    {
      question: "¿Cómo accedo al contenido después del curso?",
      answer: "Tienes acceso permanente a todos los materiales del curso, incluyendo actualizaciones futuras. También puedes descargar los recursos para consulta offline."
    }
  ];

  // Alternar FAQ
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Efecto para animación al hacer scroll
  useEffect(() => {
    const revealElements = revealRefs.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      revealElements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="animate-fadeInUp">Transformando Carreras en Tech</h1>
          <p className="animate-fadeInUp delay-100">
            En Crono Learning, nos apasiona crear pathways de aprendizaje que transforman 
            principiantes en profesionales altamente capacitados en testing y automatización.
          </p>
          
          <div className="hero-stats">
            <div className="hero-stat reveal" ref={el => revealRefs.current[0] = el}>
              <div className="hero-stat-number">5,000+</div>
              <div className="hero-stat-label">Estudiantes</div>
            </div>
            <div className="hero-stat reveal" ref={el => revealRefs.current[1] = el}>
              <div className="hero-stat-number">98%</div>
              <div className="hero-stat-label">Tasa de empleabilidad</div>
            </div>
            <div className="hero-stat reveal" ref={el => revealRefs.current[2] = el}>
              <div className="hero-stat-number">15+</div>
              <div className="hero-stat-label">Cursos disponibles</div>
            </div>
            <div className="hero-stat reveal" ref={el => revealRefs.current[3] = el}>
              <div className="hero-stat-number">12</div>
              <div className="hero-stat-label">Instructores expertos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2>Nuestra Historia</h2>
        
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} reveal`} 
              key={index}
              ref={el => revealRefs.current[4 + index] = el}
            >
              <div className="timeline-content">
                <span className="timeline-date">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Nuestro Equipo</h2>
        
        <div className="team-grid">
          {teamData.map((member, index) => (
            <div 
              className="team-member reveal" 
              key={index}
              ref={el => revealRefs.current[9 + index] = el}
            >
              <div className="team-member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-member-info">
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <p>{member.bio}</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Nuestros Valores</h2>
        
        <div className="values-grid">
          {valuesData.map((value, index) => (
            <div 
              className="value-card reveal" 
              key={index}
              ref={el => revealRefs.current[12 + index] = el}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div 
              className={`faq-item ${activeFaq === index ? 'active' : ''} reveal`} 
              key={index}
              ref={el => revealRefs.current[16 + index] = el}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-content">
          <h2>¿Listo para Transformar tu Carrera?</h2>
          <p>
            Únete a miles de estudiantes que han acelerado su carrera en tech con nuestros programas 
            especializados en testing y automatización.
          </p>
          <div className="cta-buttons">
            <a href="#courses" className="cta-button">Explorar Cursos</a>
            <a href="#contact" className="cta-button outline">Contactar Asesor</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;