import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "ABOUT", id: "about", path: "/about" },
    { label: "EXPERIENCE", id: "experience", path: "/experience" },
    { label: "PROJECTS", id: "projects", path: "/projects" },
    { label: "RESEARCH", id: "research", path: "/research" },
    { label: "HONORS", id: "honors", path: "/honors" },
    { label: "CONTACT", id: "contact", path: "/contact" },
  ];

  const navigateToPage = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-content">
        <div
          className="nav-logo"
          onClick={() => navigateToPage("/")}
          style={{ cursor: "pointer" }}
        >
          <div className="logo-text">KS</div>
        </div>
        <div className="nav-items">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-item ${hoveredItem === item.id ? "hovered" : ""} ${
                location.pathname === item.path ? "active" : ""
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => navigateToPage(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
