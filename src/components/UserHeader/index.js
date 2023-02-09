import "./style.css";
import { useRef } from "react";

import { Link } from "react-router-dom";
import { useTokenContext } from "../../contexts/TokenContext";
import VHD_logo from "../../assets/VHD_logo.png";

const UserHeader = () => {
  const { setToken } = useTokenContext();

  return (
    <header className="UserHeader">
      <Link className="link" to="/">
        <img className="logoUserHeader" src={VHD_logo} alt="logo" />
      </Link>

      <Link className="link" to="/">
        <button
          className="logoutButtonUserHeader"
          onClick={() => {
            setToken("");
          }}
        >
          Logout
        </button>{" "}
      </Link>
    </header>
  );
};

export default UserHeader;
