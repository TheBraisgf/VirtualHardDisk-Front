import "./App.css";
import "react-toastify/dist/ReactToastify.css";

//Componentes de react
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Importamos las páginas
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<h2>Not found</h2>} />
        </Routes>
      </main>
      <ToastContainer position="bottom-center" pauseOnHover theme="dark" />
    </>
  );
}

export default App;
