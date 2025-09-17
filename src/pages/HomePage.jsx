import HeroSection from '../components/sections/HeroSection';
import FeatureCard from '../components/common/FeatureCard';
import TestimonialCard from '../components/common/TestimonialCard';
import CtaSection from '../components/sections/CtaSection';
import './HomePage.css';

// Componente para la sección de certificación
const CertificationSection = () => (
    <section className="certification-section">
        <div className="section-divider"></div>
        <div className="certification-header">
            <h2 className="section-title">
                <span className="highlight-text">Certificaciones</span> que Abren Puertas
            </h2>
            <p className="section-subtitle">
                Impulsa tu carrera con nuestro exclusivo programa de certificación. Al finalizar, obtendrás una doble validación:
            </p>
        </div>
        <div className="certification-grid">
            <div className="certification-card">
                <div className="card-header">
                    <div className="certification-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/ISO_9001-2015_Certified_Logo.png" alt="Certificado CRONO" className="certification-image" />
                    </div>
                </div>
                <div className="card-body">
                    <h3>Certificado CRONO</h3>
                    <p>Un aval oficial de tu dominio técnico en QA y Automatización, reconocido por la industria.</p>
                </div>
            </div>
            <div className="certification-card">
                <div className="card-header">
                    <div className="certification-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="Google Developers" className="certification-image" />
                    </div>
                </div>
                <div className="card-body">
                    <h3>Aval de Equipo por confirmacion</h3>
                    <p>Equipo por confirmacion, conectándote con una red global de expertos.</p>
                </div>
            </div>
        </div>
        <div className="certification-footer">
            <p className="footer-text">Nuestros cursos están alineados con las mejores prácticas y estándares de Google, asegurando que tus habilidades sean relevantes y de alta demanda. ¡Prepárate para destacar!</p>
        </div>
    </section>
);


const HomePage = ({ headerHeight }) => {
    return (
        <div>
            <HeroSection headerHeight={headerHeight} />

            <section className="features-section">
                <div className="section-divider"></div>
                <h2 className="section-title">Nuestros Cursos Estrella</h2>
                <div className="features-grid">
                    <FeatureCard
                        title="QA Intensivo"
                        description="Domina los fundamentos del aseguramiento de la calidad de software desde cero."
                        price="$199.99"
                        isFeatured={true}
                        imageUrl="https://pandorafms.com/blog/wp-content/uploads/2022/02/QA-1.png"
                    />
                    <FeatureCard
                        title="Automatización APIs con Karate"
                        description="Aprende a automatizar pruebas de API de forma rápida y sencilla con la herramienta Karate."
                        price="$149.99"
                        imageUrl="https://cdn.prod.website-files.com/5ff9f08a3928de42db400872/6390b4f99767824dce49d001_01.png"
                    />
                    <FeatureCard
                        title="Automatización Mobile con Appium"
                        description="Crea scripts de automatización para aplicaciones móviles en iOS y Android."
                        price="$179.99"
                        imageUrl="https://www.automatetheplanet.com/wp-content/uploads/2018/10/getting_started_appium_-android.jpg"
                    />
                    <FeatureCard
                        title="Automatización Web con Playwright"
                        description="Pruebas end-to-end de alta velocidad y fiabilidad en navegadores modernos."
                        price="$159.99"
                        imageUrl="https://img-c.udemycdn.com/course/750x422/5064138_5362_4.jpg"
                    />
                </div>
            </section>

            <CertificationSection />

            <section className="testimonials-section">
                <div className="section-divider"></div>
                <h2 className="section-title">Lo que dicen nuestros estudiantes</h2>
                <div className="testimonials-grid">
                    <TestimonialCard
                        text="Gracias al curso, obtuve mi primer trabajo como QA en menos de un mes. ¡La metodología práctica es increíble!"
                        author="Ana G."
                        image="https://randomuser.me/api/portraits/women/65.jpg"
                    />
                    <TestimonialCard
                        text="El curso de automatización con Playwright me dio las habilidades que necesitaba para mi ascenso. ¡Super recomendado!"
                        author="Luis M."
                        image="https://randomuser.me/api/portraits/men/82.jpg"
                    />
                    <TestimonialCard
                        text="El soporte del equipo es de primera. Siempre están dispuestos a ayudar con cualquier duda que tengas."
                        author="Sofía P."
                        image="https://randomuser.me/api/portraits/women/44.jpg"
                    />
                </div>
            </section>

            <CtaSection />
        </div>
    );
};

export default HomePage;