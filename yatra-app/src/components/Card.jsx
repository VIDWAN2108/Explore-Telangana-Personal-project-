import { Link } from 'react-router-dom';
import './Card.css';

function Card({ place }) {
  return (
    <div className="card">
      <Link to={`/place/${place._id}`}>
        <img src={place.imageUrl} alt={place.name} />
        <h2>{place.name}</h2>
      </Link>
    </div>
  );
}

export default Card;
