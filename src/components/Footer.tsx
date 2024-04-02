import "../styling/Footer.css"; // Import your CSS file for styling
import { To, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: To) => {
    navigate(path);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <nav className="footer-nav">
          <ul className="footer-nav-list">
            <li>
              <a onClick={() => handleNavigation("/")}>Home</a>
            </li>
            <li>
              <a onClick={() => handleNavigation("/CategoryPage")}>
                Categories
              </a>
            </li>
            <li>
              <a onClick={() => handleNavigation("/Cocktails")}>Cocktails</a>
            </li>
            <li>
              <a onClick={() => handleNavigation("/Filter")}>Filter</a>
            </li>
            <li>
              <a onClick={() => handleNavigation("/Recipes")}>Recipes</a>
            </li>
            <li>
              <a onClick={() => handleNavigation("/AdminPage")}>Admin</a>
            </li>
            <li>
              <a onClick={() => handleNavigation("/popular")}>Popular</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
