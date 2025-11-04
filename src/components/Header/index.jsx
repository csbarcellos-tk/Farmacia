import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/download.png";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo da Farmácia Saúde+" />
          </Link>
        </div>

        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
            end
          >
            Início
          </NavLink>

          <NavLink
            to="/medicamentos"
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Medicamentos
          </NavLink>

          <NavLink
            to="/cuidados-pessoais"
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Cuidados Pessoais
          </NavLink>

          <NavLink
            to="/promocoes"
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Promoções
          </NavLink>

          <NavLink
            to="/sobre-nos"
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Sobre Nós
          </NavLink>

          <NavLink
            to="/contato"
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contato
          </NavLink>
        </nav>
      </div>
    </header>
  );
}