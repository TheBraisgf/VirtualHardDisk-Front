import "./style.css";
import VHD_logo from "../../assets/VHD_logo.png"


const Header = ()=>{
return(
<section className="Header">
    <img className="logo" src={VHD_logo} alt="logo"/>
    <div className="links">
      <p>About Us</p>
      <p>Register</p>
      <p>Login</p>
      </div>
      </section>
)
}

export default Header