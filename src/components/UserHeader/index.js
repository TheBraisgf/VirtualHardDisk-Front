import "./style.css";

import { Link } from "react-router-dom";
import { useTokenContext } from "../../contexts/TokenContext";
import VHD_logo from "../../assets/VHD_logo.png";

const UserHeader = () => {
  const { setToken } = useTokenContext();

  return (
    <header className="Header">
      <Link className="link" to="/">
        <img className="logo" src={VHD_logo} alt="logo" />
      </Link>

      <Link className="link" to="/">
        <button
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
