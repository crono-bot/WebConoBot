import './GreetingCard.css'; // Importa el CSS

const GreetingCard = ({ name, message }) => {
  return (
    <div className="greeting-card">
      <h3>{message}</h3>
      <p>Un saludo para: {name}</p>
    </div>
  );
};

export default GreetingCard;