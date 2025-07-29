import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddReview.css";

const AddReview = () => {
  const { id } = useParams(); // placeId
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0 || comment.trim() === "") {
      setError("Please provide both rating and comment.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/reviews", {
        placeId: id,
        rating,
        comment,
      });

      setSuccess("Review submitted!");
      setTimeout(() => {
        navigate(`/place/${id}`);
      }, 1500);
    } catch (err) {
      setError("Failed to submit review.");
      console.error(err);
    }
  };

  return (
    <div className="add-review-container">
      <h2>Add Your Review</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <label>Rating:</label>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? "filled" : ""}`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience..."
        />

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default AddReview;
