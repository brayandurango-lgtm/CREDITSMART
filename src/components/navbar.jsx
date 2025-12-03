import { Link } from "react-router-dom";
import logo from "../assets/src/assets/Logotipo de la empresa.png";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        background: "#f8f8f8",
        borderBottom: "1px solid #ccc",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <img
        src={logo}
        alt="Creditsmart Logo"
        style={{ width: "60px", height: "auto", marginRight: "15px" }}
      />

      <h2 style={{ marginRight: "20px" }}>CreditSmart</h2>

      <Link to="/" style={{ marginRight: "15px" }}>
        Inicio
      </Link>

      <Link to="/simulador" style={{ marginRight: "15px" }}>
        Simulador
      </Link>

      <Link to="/solicitar">
        Solicitar
      </Link>
    </nav>
  );
};

export default Navbar;