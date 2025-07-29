import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((place) => place._id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="favorites-container">
      <h2>My Favorite Places</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((place) => (
            <div className="favorite-card" key={place._id}>
              <div className="image-wrapper">
                <Link to={`/place/${place._id}`}>
                  <img
                    src={`/images/${place.image}`}
                    alt={place.name}
                    className="favorite-image"
                  />
                </Link>
                <div
                  className="heart-icon"
                  onClick={() => removeFavorite(place._id)}
                  title="Remove from favorites"
                >
                  ❤️
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
