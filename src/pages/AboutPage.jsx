import { useState, useEffect, useRef } from 'react';
import './AboutPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AboutPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const revealRefs = useRef([]);
  
  // Datos para la línea de tiempo
  const timelineData = [
    {
      year: "2022",
      title: "Fundación CRONO BOT",
      description: "Iniciamos con la visión de democratizar la educación en QA Testing y automatización en Latinoamérica."
    },
    {
      year: "2023",
      title: "Primeros Cursos de QA",
      description: "Lanzamos nuestros primeros programas especializados en testing manual y automatización básica."
    },
    {
      year: "2024",
      title: "Alianza con GDG Ica",
      description: "Establecimos nuestra importante alianza con Google Developer Groups Ica para certificaciones conjuntas."
    },
    {
      year: "2024",
      title: "Expansión de Contenidos",
      description: "Incorporamos cursos avanzados en Playwright, Appium y Karate para automatización completa."
    },
    {
      year: "2024",
      title: "Comunidad Activa",
      description: "Construimos una comunidad sólida de más de 500 estudiantes y profesionales en QA Testing."
    }
  ];

  // Datos del equipo
  const teamData = [
    {
      name: "Carlos Mendoza",
      role: "CEO & Fundador",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Más de 8 años de experiencia en QA Automation. Especialista en frameworks de testing y mentoría técnica."
    },
    {
      name: "Ana Torres",
      role: "Directora Académica",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Líder en desarrollo de contenido educativo práctico para testing manual y automatizado."
    },
    {
      name: "Miguel Ángel Ruiz",
      role: "Instructor Senior",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Automation Engineer con expertise en Playwright, Appium y estrategias de testing ágil."
    }
  ];

  // Valores de la empresa
  const valuesData = [
    {
      icon: "🎯",
      title: "Educación Práctica",
      description: "Enseñamos con proyectos reales que enfrentarás en el mundo laboral actual."
    },
    {
      icon: "🤝",
      title: "Comunidad GDG",
      description: "Formamos parte de la red global de Google Developers Groups, conectándote con oportunidades."
    },
    {
      icon: "🚀",
      title: "Actualización Constante",
      description: "Mantenemos nuestros contenidos al día con las últimas herramientas y metodologías de testing."
    },
    {
      icon: "📈",
      title: "Enfoque Laboral",
      description: "Preparamos estudiantes para obtener empleo rápidamente en el competitivo mercado tech."
    }
  ];

  // Preguntas frecuentes
  const faqData = [
    {
      question: "¿Qué certificaciones obtengo al completar los cursos?",
      answer: "Recibes doble certificación: Certificado oficial de CRONO BOT que valida tus habilidades técnicas y Certificado de GDG Ica respaldado por la comunidad Google Developers, ampliamente reconocido en la industria."
    },
    {
      question: "¿Los cursos son 100% prácticos?",
      answer: "Sí, nuestro enfoque es 80% práctico y 20% teórico. Trabajarás en proyectos reales desde el primer día, simulando entornos laborales actuales con herramientas que usan las empresas líderes."
    },
    {
      question: "¿Necesito experiencia previa en programación?",
      answer: "No es necesaria. Tenemos rutas de aprendizaje diseñadas para principiantes que incluyen fundamentos de programación, hasta cursos avanzados para quienes ya tienen experiencia en testing."
    },
    {
      question: "¿Cómo me ayuda la certificación de GDG Ica?",
      answer: "La certificación GDG Ica te conecta con una red global de desarrolladores y empresas, aumenta tu credibilidad profesional y es un diferenciador clave en procesos de reclutamiento tech."
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
          <h1 className="animate-fadeInUp">Formando los Mejores QA del Mercado</h1>
          <p className="animate-fadeInUp delay-100">
            En CRONO BOT, transformamos tu pasión por la tecnología en una carrera sólida 
            en QA Testing con certificaciones respaldadas por nuestra empresa y GDG Ica.
          </p>
          
          <div className="hero-stats">
            <div className="hero-stat reveal" ref={el => revealRefs.current[0] = el}>
              <div className="hero-stat-number">500+</div>
              <div className="hero-stat-label">Estudiantes</div>
            </div>
            <div className="hero-stat reveal" ref={el => revealRefs.current[1] = el}>
              <div className="hero-stat-number">95%</div>
              <div className="hero-stat-label">Tasa de empleabilidad</div>
            </div>
            <div className="hero-stat reveal" ref={el => revealRefs.current[2] = el}>
              <div className="hero-stat-number">8+</div>
              <div className="hero-stat-label">Cursos especializados</div>
            </div>
            <div className="hero-stat reveal" ref={el => revealRefs.current[3] = el}>
              <div className="hero-stat-number">2</div>
              <div className="hero-stat-label">Certificaciones por curso</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2>Nuestra Trayectoria</h2>
        
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
        <h2>Nuestro Equipo de Expertos</h2>
        
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
                <div className="social-links1">
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
        <h2>Lo que Nos Define</h2>
        
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
          <h2>¿Listo para Iniciar tu Carrera en QA Testing?</h2>
          <p>
            Únete a nuestra comunidad y obtén la doble certificación CRONO BOT y GDG Ica 
            que te diferenciará en el mercado laboral tech.
          </p>
          <div className="cta-buttons">
            <a href="#courses" className="cta-button">Ver Cursos Disponibles</a>
            <a href="#contact" className="cta-button outline">Chatear con Asesor</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;