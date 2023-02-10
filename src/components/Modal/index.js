import "./style.css";
import { useTokenContext } from "../../contexts/TokenContext";
import Button from "../../components/Button";
import logoutIcon from "../../assets/logoutIcon.png";
import userIcon from "../../assets/userIcon.png";
import { Link } from "react-router-dom";

// Pinta un modal blanco con un fondo oscuro. El contenido del modal es lo recibido en la prop children. También recibe setShowModal para poder cerrar el modal cuando hagamos click en el fondo oscuro
const Modal = ({ setShowModal }) => {
  const { setToken } = useTokenContext();
  return (
    <div
      className="modalBg"
      onClick={(event) => {
        // Cuando colocamos el modal dentro de una entry, al hacer click en el fondo oscuro se activa el Link que envuelve la Entry. Para solucionar esto llamamos a event.preventDefault()
        event.preventDefault();

        // Cerramos el modal cambiando el estado showModal a false
        setShowModal(false);
      }}
    >
      <div
        className="modalContainer"
        onClick={(event) => {
          // Cuando hacemos click en el contenido del modal (lo blanco), cancelamos la propagación para que no se active el onClick del fondo del modal (lo oscuro)
          event.stopPropagation();
        }}
      >
        <section className="userModalIcon">
          <img className="userIcon" src={userIcon} alt="userIcon" />

          <Link
            className="link"
            to="/"
            onClick={() => {
              setToken("");
            }}
          >
            <img className="logoutIcon" src={logoutIcon} alt="logoutIcon" />
          </Link>
        </section>

        <section className="userModalInfo">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Biography" />
          <p>
            Change your information by entering it in the fields above and
            clicking the button below.
          </p>

          <Button text="Change Info" />
        </section>
      </div>
    </div>
  );
};

export default Modal;
