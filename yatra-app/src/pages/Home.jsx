import './Home.css';
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceCard from "../components/PlaceCard";

function Home() {
  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/places")
      .then((res) => setPlaces(res.data))
      .catch((err) => console.error("Error fetching places:", err));
  }, []);

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    place.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      
      <h1 className="text-2xl font-bold text-center mt-4">Top Places to Visit</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search places..."
          className="search-bar"

          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredPlaces.map((place) => (
          <PlaceCard key={place._id} place={place} />
        ))}
      </div>
    </div>
  );
}

export default Home;
