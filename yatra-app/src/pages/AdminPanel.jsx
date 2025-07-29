import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";

function AdminPanel() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    bestTime: "",
    timings: "",
    image: "",
    coordinates: { lat: "", lng: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "lat" || name === "lng") {
      setFormData((prev) => ({
        ...prev,
        coordinates: {
          ...prev.coordinates,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newPlace = {
        ...formData,
        coordinates: [
          parseFloat(formData.coordinates.lat),
          parseFloat(formData.coordinates.lng),
        ],
      };

      await axios.post("http://localhost:5000/api/places", newPlace);
      alert("Place added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error adding place:", error);
      alert("Error adding place");
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel - Add New Place</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>Best Time to Visit:</label>
        <input
          type="text"
          name="bestTime"
          value={formData.bestTime}
          onChange={handleChange}
        />

        <label>Opening/Closing Timings:</label>
        <input
          type="text"
          name="timings"
          value={formData.timings}
          onChange={handleChange}
        />

        <label>Image filename (e.g., charminar.jpeg):</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <label>Latitude:</label>
        <input
          type="text"
          name="lat"
          value={formData.coordinates.lat}
          onChange={handleChange}
          required
        />

        <label>Longitude:</label>
        <input
          type="text"
          name="lng"
          value={formData.coordinates.lng}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Place</button>
      </form>
    </div>
  );
}

export default AdminPanel;
