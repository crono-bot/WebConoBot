import React, { useState, useRef, useEffect } from 'react';
import './FeatureCard.css';

const FeatureCard = ({ title, description, price, isFeatured, imageUrl, duration, level, rating }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const cardRef = useRef(null);
    const modalRef = useRef(null);

    const handleWishlistToggle = (e) => {
        e.stopPropagation();
        setIsWishlisted(!isWishlisted);
    };

    const handleInfoClick = (e) => {
        e.stopPropagation();
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // Datos específicos para cada curso
    const courseDetails = {
        "QA Testing Intensivo": {
            objetivos: [
                "Dominar fundamentos de testing manual",
                "Aprender diseño de casos de prueba",
                "Gestionar ciclos de testing",
                "Reportar bugs efectivamente"
            ],
            herramientas: ["JIRA", "TestRail", "Postman", "Chrome DevTools"],
            duracion: "8 semanas",
            nivel: "Principiante",
            certificacion: "Doble certificación CRONO BOT + GDG Ica",
            proyectoFinal: "Plan de pruebas completo para aplicación web"
        },
        "Automatización de APIs con Karate": {
            objetivos: [
                "Automatizar APIs REST con Karate",
                "Crear pruebas de integración",
                "Validar respuestas JSON/XML",
                "Generar reportes automáticos"
            ],
            herramientas: ["Karate DSL", "Maven", "Cucumber", "Git"],
            duracion: "6 semanas",
            nivel: "Intermedio",
            certificacion: "Doble certificación CRONO BOT + GDG Ica",
            proyectoFinal: "Framework de automatización para API REST"
        },
        "Automatización Mobile con Appium": {
            objetivos: [
                "Automatizar apps móviles iOS/Android",
                "Configurar entornos de testing",
                "Crear scripts robustos",
                "Ejecutar en dispositivos reales y emuladores"
            ],
            herramientas: ["Appium", "Selenium", "Android Studio", "Xcode"],
            duracion: "7 semanas",
            nivel: "Intermedio",
            certificacion: "Doble certificación CRONO BOT + GDG Ica",
            proyectoFinal: "Suite de pruebas para aplicación móvil nativa"
        },
        "Automatización Web con Playwright": {
            objetivos: [
                "Dominar Playwright para testing E2E",
                "Automatizar múltiples navegadores",
                "Grabar y ejecutar pruebas",
                "Integrar con CI/CD"
            ],
            herramientas: ["Playwright", "TypeScript/JavaScript", "GitHub Actions", "Docker"],
            duracion: "6 semanas",
            nivel: "Intermedio-Avanzado",
            certificacion: "Doble certificación CRONO BOT + GDG Ica",
            proyectoFinal: "Framework de testing para aplicación web compleja"
        }
    };

    // Cerrar modal al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);

    // Obtener detalles del curso actual
    const currentCourseDetails = courseDetails[title] || {
        objetivos: ["Información detallada disponible pronto"],
        herramientas: ["Por definir"],
        duracion: duration || "8 semanas",
        nivel: level || "Intermedio",
        certificacion: "Doble certificación CRONO BOT + GDG Ica",
        proyectoFinal: "Proyecto práctico aplicando lo aprendido"
    };

    return (
        <>
            <div 
                ref={cardRef}
                className={`feature-card ${isFeatured ? 'featured-card' : ''}`}
            >
                {/* Header con imagen */}
                <div className="card-header">
                    <div className="image-container">
                        <img src={imageUrl} alt={title} className="card-image" />
                        
                        {isFeatured && (
                            <div className="featured-badge">
                                <span className="badge-icon">🔥</span>
                                <span className="badge-text">Popular</span>
                            </div>
                        )}
                        
                        <div className="level-badge">
                            {level || 'Intermedio'}
                        </div>
                        
                        <button 
                            className={`wishlist-btn ${isWishlisted ? 'wishlisted' : ''}`}
                            onClick={handleWishlistToggle}
                        >
                            <span className="heart-icon">{isWishlisted ? '❤️' : '🤍'}</span>
                        </button>
                    </div>
                </div>

                {/* Contenido principal compacto */}
                <div className="card-content">
                    <div className="card-meta">
                        <div className="rating">
                            <span className="stars">★★★★★</span>
                            <span className="rating-text">{rating || '4.9'}/5</span>
                        </div>
                        <div className="duration">
                            <span className="clock-icon">⏱️</span>
                            {duration || '8 semanas'}
                        </div>
                    </div>

                    <h3 className="card-title">{title}</h3>
                    
                    <p className="card-description">{description}</p>

                    {/* Precio siempre visible - diseño compacto */}
                    <div className="price-section-main">
                        <div className="price-container-main">
                            <span className="price-label-main">INVERSIÓN TOTAL</span>
                            <span className="card-price-main">{price || '$149.99'}</span>
                        </div>
                    </div>
                </div>

                {/* Footer compacto */}
                <div className="card-footer">
                    <div className="action-buttons">
                        <button className="buy-button primary-btn">
                            <span className="button-text">Comprar ahora</span>
                        </button>
                        
                        <button 
                            className="info-button secondary-btn"
                            onClick={handleInfoClick}
                        >
                            <span className="button-text">Más info</span>
                        </button>
                    </div>
                </div>

                {isFeatured && <div className="glow-effect"></div>}
                <div className="hover-effect"></div>
            </div>

            {/* Modal de información detallada */}
            {showModal && (
                <div className="modal-overlay">
                    <div ref={modalRef} className="course-modal">
                        <div className="modal-header">
                            <h2 className="modal-title">{title}</h2>
                            <button className="close-button" onClick={closeModal}>
                                ×
                            </button>
                        </div>
                        
                        <div className="modal-content">
                            <div className="modal-section">
                                <h3>📝 Descripción del Curso</h3>
                                <p>{description}</p>
                            </div>

                            <div className="modal-section">
                                <h3>🎯 Objetivos de Aprendizaje</h3>
                                <ul className="objectives-list">
                                    {currentCourseDetails.objetivos.map((objetivo, index) => (
                                        <li key={index}>{objetivo}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="modal-section">
                                <h3>🛠️ Herramientas que Dominarás</h3>
                                <div className="tools-grid">
                                    {currentCourseDetails.herramientas.map((herramienta, index) => (
                                        <span key={index} className="tool-tag">{herramienta}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-details-grid">
                                <div className="detail-item">
                                    <h4>⏰ Duración</h4>
                                    <p>{currentCourseDetails.duracion}</p>
                                </div>
                                <div className="detail-item">
                                    <h4>📊 Nivel</h4>
                                    <p>{currentCourseDetails.nivel}</p>
                                </div>
                                <div className="detail-item">
                                    <h4>🏆 Certificación</h4>
                                    <p>{currentCourseDetails.certificacion}</p>
                                </div>
                                <div className="detail-item">
                                    <h4>💼 Proyecto Final</h4>
                                    <p>{currentCourseDetails.proyectoFinal}</p>
                                </div>
                            </div>

                            <div className="modal-section">
                                <h3>💰 Inversión</h3>
                                <div className="investment-section">
                                    <div className="price-display">
                                        <span className="price-label">Precio Total:</span>
                                        <span className="modal-price">{price || '$149.99'}</span>
                                    </div>
                                    <p className="payment-info">* Opciones de pago disponibles</p>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="modal-buy-button primary-btn">
                                Comprar Ahora
                            </button>
                            <button className="modal-close-button secondary-btn" onClick={closeModal}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FeatureCard;