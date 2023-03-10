import "./style.css";

//React Components
import { useState } from "react";
import { useTokenContext } from "../../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//Custom Components
import Button from "../Button";

const LoginForm = () => {
  // Estados para controlar los inputs del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Nos traemos la función setToken del contexto para poder modificar el estado del token una vez nos logueemos
  const { setToken } = useTokenContext();

  // Usamos el hook useNavigate, que nos da la función navigate que podemos utilizar para redireccionar al usuario
  const navigate = useNavigate();

  return (
    <section className="loginMainSection">
      <form
        className="loginForm"
        onSubmit={async (event) => {
          try {
            // Cancelamos la acción por defecto del formulario
            event.preventDefault();

            // Hacemos una petición POST a la API y enviamos en el body un JSON con los datos que ha introducido el usuario en el formulario. IMPORTANTE mandar el header Content-Type indicando que el body es un JSON
            const res = await fetch("http://localhost:4000/users/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            });

            // Accedemos al body de la respuesta
            const body = await res.json();
            // Si la respuesta viene mal, lanzamos un error con el mensaje que viene en el body
            if (!res.ok) {
              throw new Error(body.message);
            }

            // Cambiamos el estado y metemos el token recogido de la API
            setToken(body.data.token);
            // Redireccionamos al usuario a inicio
            navigate(`/profile`);
            // Mandamos una alerta indicando que el usuario se ha logueado
            toast.success("You have successfully logged in!");
          } catch (error) {
            // Si salta algún error lo sacamos por consola y se lo mostramos al usuario en una alerta
            console.error(error);
            toast.error(error.message);
          }
        }}
      >
        <h1>Hello Again!</h1>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="Email"
        />

        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="******"
        />
        <Button text="Login" />
      </form>
    </section>
  );
};

export default LoginForm;
