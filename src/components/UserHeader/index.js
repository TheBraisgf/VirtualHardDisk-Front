import "./style.css";

import { Link } from "react-router-dom";

import VHD_logo from "../../assets/VHD_logo.png";

const UserHeader = () => {
  return (
    <header className="Header">
      <Link className="link" to="/">
        <img className="logo" src={VHD_logo} alt="logo" />
      </Link>
    </header>
  );
};

export default UserHeader;
