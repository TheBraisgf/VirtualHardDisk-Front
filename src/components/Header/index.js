import "./style.css";

import { Link } from "react-router-dom";
import { useTokenContext } from "../../contexts/TokenContext";

import VHD_logo from "../../assets/VHD_logo.png";

const Header = () => {
  const { token, setToken } = useTokenContext();
  return (
    <header className="Header">
      <Link className="link" to="/">
        <img className="logo" src={VHD_logo} alt="logo" />
      </Link>

      <nav>
        <ul>
          {!token && (
            <>
              <Link to="/about">About Us</Link>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}

          {token && (
            <>
              <Link to="/about">About Us</Link>
              <li>
                <Link to="/profile">PROFILE</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setToken("");
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
