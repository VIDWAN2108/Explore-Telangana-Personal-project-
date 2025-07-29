import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PlaceDetails from "./pages/PlaceDetails";
import Favorites from "./pages/Favorites";
import AdminPanel from "./pages/AdminPanel";
import Navbar from "./components/Navbar";
import AddReview from "./pages/AddReview";
import Footer from "./components/Footer";
import "./components/Footer.css";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/place/:id/review" element={<AddReview />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
