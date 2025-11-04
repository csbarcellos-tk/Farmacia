import { Link, NavLink } from "react-router-dom";
// Corrigir import do logo para o arquivo existente
import Logo from "../../assets/download.png";
import "./style.css";

export default function Header() {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo do projeto" />
        </Link>
      </div>

      {/* NavLink: aplicar classe 'active' quando ativo */}
      <nav className="nav">
        <NavLink to="/servicos" className={({ isActive }) => (isActive ? "active" : "")}>Serviços</NavLink>
        <NavLink to="/sobre-nos" className={({ isActive }) => (isActive ? "active" : "")}>Sobre nós</NavLink>
        <NavLink to="/fale-conosco" className={({ isActive }) => (isActive ? "active" : "")}>Contato</NavLink>
      </nav>
    </header>
  );
}
