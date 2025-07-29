import { Link } from "react-router-dom";
import "./Navbar.css"; // optional for styling

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Explore Telangana</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
