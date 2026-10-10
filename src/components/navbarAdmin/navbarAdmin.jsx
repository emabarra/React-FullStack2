import { useNavigate, Link } from "react-router-dom";
import styles from "./navbarAdmin.module.css"

function Navbar_Admin(){
    

    const navigate = useNavigate();
    // Función para navegar programáticamente al inicio (root "/")
    function irInicio() {
        navigate("/");
    }

    function irGestionProd() {
        navigate("/gestionprod");
    }

    return(
        <header>
        <nav className={`navbar navbar-expand-lg ${styles.miClase}`}>
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/admin">
              Menú Administrador
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
                  <Link className="nav-link active" aria-current="page" to="/admin">
                    <i className="bi bi-file-earmark-bar-graph me-1"></i>Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gestionuser">
                    <i className="bi bi-people me-1"></i>Gestión de Usuarios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gestionprod">
                    <i className="bi bi-boxes me-1"></i>Gestión de Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reportes">
                    <i className="bi bi-clipboard2-fill me-1"></i>Reportes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">
                    <i className="bi bi-telephone-fill me-1"></i>Contactos
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

export default Navbar_Admin