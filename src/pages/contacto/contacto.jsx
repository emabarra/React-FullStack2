import { useNavigate, Link } from "react-router-dom";
import styles from "./contacto.module.css";

function Contacto() {
    const navigate = useNavigate();

    function irInicio() {
        navigate("/");
    }

    return (
        <>
            <header>
                <nav className={`navbar navbar-expand-lg ${styles.miClase}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
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
                                            <Link className="dropdown-item" to="/fruta-fresca">
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

            <main>
                <section id="desc-contacto" className={styles.descContacto}>
                    <div className={styles.contenedorContacto}>
                        <h2 className="mb-4">Contactos</h2>
                        <p>
                            En HuertoHogar valoramos el contacto con nuestros clientes, por lo que ponemos a su disposición
                            varias formas de comunicarse con nosotros. En caso de que tenga alguna duda o consulta respecto
                            de nuestros productos o servicios, no dude en contactarnos. Puede hacerlo a través de los siguientes
                            canales:
                        </p>
                        <p className="mt-4">
                            Teléfono: <strong>+56 9 1234 5678</strong>
                        </p>
                        <p>
                            Correo electrónico: <strong>servicio.cliente@huertohogar.cl</strong>
                        </p>
                        <p>
                            Horario de atención: <strong>Lunes a Viernes de 9:00 a 18:00 hrs.</strong>
                        </p>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContenido}>
                    <p>&copy; Sitio web realizado por YZ spa - Versión 1.0</p>
                    <a href="#"><i className="bi bi-instagram"></i> Instagram</a>{" "}
                    <a href="#"><i className="bi bi-tiktok"></i> Tiktok</a>{" "}
                    <a href="#"><i className="bi bi-facebook"></i> Facebook</a>{" "}
                    <Link to="/contacto">
                        <i className="bi bi-telephone-fill"></i> Contacto
                    </Link>
                </div>
            </footer>
        </>
    );
}

export default Contacto;