import React, { useState, useRef, useEffect } from 'react';
import './FeatureCard.css';

const FeatureCard = ({ title, description, price, isFeatured, imageUrl, duration, level, rating }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const cardRef = useRef(null);
    const detailsRef = useRef(null);

    const handleWishlistToggle = () => {
        setIsWishlisted(!isWishlisted);
    };

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    useEffect(() => {
        if (showDetails && detailsRef.current) {
            const cardElement = cardRef.current;
            cardElement.style.height = 'auto';
            cardElement.style.minHeight = '500px';
            
            setTimeout(() => {
                detailsRef.current.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest'
                });
            }, 100);
        } else if (cardRef.current) {
            cardRef.current.style.height = '';
            cardRef.current.style.minHeight = '500px';
        }
    }, [showDetails]);

    return (
        <div 
            ref={cardRef}
            className={`feature-card ${isFeatured ? 'featured-card' : ''} ${showDetails ? 'expanded' : ''}`}
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
                    
                    <button className="info-button secondary-btn">
                        <span className="button-text">Más info</span>
                    </button>
                </div>
            </div>

            {isFeatured && <div className="glow-effect"></div>}
            <div className="hover-effect"></div>
        </div>
    );
};

export default FeatureCard;