import "./style.css";

import { Link } from "react-router-dom";

import VHD_logo from "../../assets/VHD_logo.png";

const Header = () => {
  return (
    <header className="Header">
      <Link className="link" to="/">
        <img className="logo" src={VHD_logo} alt="logo" />
      </Link>

      <nav>
        <ul>
          <li>About Us</li>
          <Link to="/register">Register</Link>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
