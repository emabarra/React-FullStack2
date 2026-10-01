import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./navbar.module.css"



function Navbar_tienda() {

    const navigate = useNavigate();
    // Función para navegar programáticamente al inicio (root "/")
    function irInicio() {
        navigate("/");
    }

    function irContacto() {
        navigate("/contacto");
    }

    function irFidelizacion() {
        navigate("/fidelizacion");
    }

    function irBlog() {
        navigate("/blog");
    }

    return (
        <header>
            <nav className={`navbar navbar-expand-lg ${styles.miClase || ""}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={irInicio}>
                        <img src="/imagenes/Code_Generated_Image.png" alt="Huerto Hogar" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button
                                    className="nav-link active btn btn-link p-0 border-0"
                                    onClick={irInicio}
                                    aria-current="page"
                                >
                                    <i className="bi bi-house-door-fill"></i>
                                </button>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/fidelizacion">
                                    Fidelización
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">
                                    Blog
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
                                    Productos
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/frutafresca">
                                            Frutas Frescas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/verduras-organicas">
                                            Verduras Orgánicas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/productos-organicos">
                                            Productos Orgánicos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/productos-lacteos">
                                            Productos Lácteos
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tiendas">
                                    <i className="bi bi-shop"></i> Centros de Distribución
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    <i className="bi bi-person-circle"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar_tienda