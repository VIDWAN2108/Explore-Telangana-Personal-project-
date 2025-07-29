import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import MapWithRoute from "../components/MapWithRoute";
import "../pages/PlaceDetails.css";

function PlaceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/places/${id}`)
      .then((res) => setPlace(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/reviews/place/${id}`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation([latitude, longitude]);
      },
      (err) => console.warn("Geolocation error:", err)
    );
  }, []);

  const handleBack = () => navigate(-1);

  const addToFavorites = () => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    const already = stored.find((item) => item._id === place._id);
    if (!already) {
      localStorage.setItem("favorites", JSON.stringify([...stored, place]));
      alert("Added to favorites!");
    } else {
      alert("Already in favorites!");
    }
  };

  if (!place) return <div className="place-details">Loading...</div>;

  return (
    <div className="place-details">
      <button onClick={handleBack} className="back-btn">← Back</button>

      <img src={`/images/${place.image}`} alt={place.name} />

      <h1>{place.name}</h1>
      <p className="description">{place.description}</p>
      <p><strong>Best Time to Visit:</strong> {place.bestTimeToVisit}</p>
      <p><strong>Timings:</strong> {place.timings}</p>

      <button onClick={addToFavorites} className="favorite-btn">Add to Favorites</button>

      <div className="map-section">
        <h2>Route Map</h2>
        {userLocation ? (
          <MapWithRoute userLocation={userLocation} destination={place.location} />
        ) : (
          <p>Getting your location...</p>
        )}
      </div>

      <div className="review-section">
        <h2>Reviews & Ratings</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first!</p>
        ) : (
          reviews.map((review) => (
            <div key={review._id} className="review-card">
              <div className="rating">
                <strong>Rating:</strong>{" "}
                <span className="stars">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </span>
              </div>
              <p>{review.comment}</p>
            </div>
          ))
        )}

        <Link to={`/place/${id}/review`}>
          <button className="review-btn">Add a Review</button>
        </Link>
      </div>
    </div>
  );
}

export default PlaceDetails;
