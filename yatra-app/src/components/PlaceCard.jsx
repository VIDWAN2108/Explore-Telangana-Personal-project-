import { Link } from "react-router-dom";
import './PlaceCard.css';

function PlaceCard({ place }) {
  return (
    <Link to={`/place/${place._id}`} className="place-card-link">
      <div className="place-card">
        <img
          src={`/images/${place.image}`}
          alt={place.name}
          className="place-image"
        />
        <h2 className="place-title">{place.name}</h2>
        <p className="place-description">{place.description.slice(0, 80)}...</p>
      </div>
    </Link>
  );
}

export default PlaceCard;
