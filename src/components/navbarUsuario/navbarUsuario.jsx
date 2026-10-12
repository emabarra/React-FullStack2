import { useNavigate, Link } from "react-router-dom";
import styles from "./navbarUsuario.module.css"

function Navbar_Usuario(){
    return(
        

     <header>
        <nav className={`navbar navbar-expand-lg ${styles.miClase}`}>
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/perfil-usuario">
              Menú Usuario
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Página Principal
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/historial-compras">
                    <i className="bi bi-boxes me-1"></i>Historial de compras
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item text-danger" to="/login">
                        Cerrar Sesión
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Navbar_Usuario