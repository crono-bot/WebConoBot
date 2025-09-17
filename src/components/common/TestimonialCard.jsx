import './TestimonialCard.css';

const TestimonialCard = ({ text, author, image }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-author">
        <img src={image} alt={author} className="author-image" />
        <span className="author-name">{author}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;