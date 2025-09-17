import HeroSection from '../components/sections/HeroSection';
import FeatureCard from '../components/common/FeatureCard';
import CtaSection from '../components/sections/CtaSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <HeroSection />

      <section className="features-section">
        <h2 className="section-title">Nuestras Características</h2>
        <div className="features-grid">
          <FeatureCard 
            title="Diseño Moderno"
            description="Interfaces limpias y minimalistas que cautivan a los usuarios."
          />
          <FeatureCard 
            title="Desarrollo Ágil"
            description="Entregamos resultados de alta calidad en tiempos récord."
          />
          <FeatureCard 
            title="Experiencia de Usuario"
            description="Creamos experiencias intuitivas y fluidas para tus clientes."
          />
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default HomePage;