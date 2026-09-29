import { useNavigate, Link } from "react-router-dom";
import styles from "./inicio.module.css";

function Inicio() {
    const navigate = useNavigate();

    // Función para navegar programáticamente al inicio (root "/")
    function irInicio() {
        navigate("/");
    }

    return (
        <>
            <header>
                <nav className={`navbar navbar-expand-lg ${styles.miClase}`}>
                    <div className="container-fluid">
                        {/* Puedes usar el click para llamar a irInicio o dejar el Link con to="/" */}
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
                                    {/* Icono de la casa configurado con la función irInicio */}
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
                <section className={styles.banner}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p className={styles.promoTitle}>HUERTO HOGAR</p>
                                <p>DEL CAMPO AL HOGAR</p>
                            </div>
                            <div className="col-md-6 text-center">
                                <img src="/imagenes/farmer2.png" className="img-fluid" alt="Granjero principal" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="/imagenes/farmer.png" className={styles.serviceImg} alt="Quienes somos" />
                                <h4>Quienes Somos</h4>
                                <p>
                                    HuertoHogar es una tienda online dedicada a llevar la frescura y calidad de los
                                    productos del campo directamente a la puerta de nuestros clientes en Chile...
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img src="/imagenes/sprout.png" className={styles.serviceImg} alt="Nuestro compromiso" />
                                <h4>Nuestro Compromiso</h4>
                                <p>
                                    Nuestra misión es proporcionar productos frescos y de calidad directamente desde
                                    el campo hasta la puerta de nuestros clientes...
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img src="/imagenes/vegetables.png" className={styles.serviceImg} alt="Hacia donde vamos" />
                                <h4>Hacia Donde Vamos</h4>
                                <p>
                                    Nuestra visión es ser la tienda online líder en la distribución de productos
                                    frescos y naturales en Chile...
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContenido}>
                    <p>&copy; Sitio web realizado por YZ spa - Versión 1.0</p>
                    <a href="#"><i className="bi bi-instagram"></i> Instagram</a>
                    <a href="#"><i className="bi bi-tiktok"></i> Tiktok</a>
                    <a href="#"><i className="bi bi-facebook"></i> Facebook</a>
                    <Link to="/contacto">
                        <i className="bi bi-telephone-fill"></i> Contacto
                    </Link>
                </div>
            </footer>
        </>
    );
}

export default Inicio;