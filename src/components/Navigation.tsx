import React from "react";
import { Link } from "react-router-dom";
import "../Navigation.css"; // Import the CSS file with a relative path

const Navigation: React.FC = () => {
  return (
    <nav>
      <img
        src="/assets/images/720p White.png"
        alt="NoizCode Logo"
        className="logo"
      />
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/music">Music</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/streams">Streams</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navigation;
