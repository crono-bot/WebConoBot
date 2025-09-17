// src/components/common/FeatureCard.jsx
import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ title, description, price, isFeatured, imageUrl }) => {
    return (
        <div className={`feature-card ${isFeatured ? 'featured-card' : ''}`}>
            <h3 className="card-title">{title}</h3>
            {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
            <p className="card-description">{description}</p>
            <div className="card-footer">
                <span className="card-price">{price}</span>
                <button className="buy-button">Comprar</button>
            </div>
        </div>
    );
};

export default FeatureCard;