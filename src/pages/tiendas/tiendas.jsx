import { useNavigate, Link } from "react-router-dom";
import styles from "./tiendas.module.css";

function Tiendas() {
    const navigate = useNavigate();

    const centrosDistribucion = [
        {
            id: 1,
            ciudad: "Santiago",
            direccion: "Av. Santa Isabel 1284",
            horario: "Lunes - Viernes 08:00 - 18:00 hrs",
        },
        {
            id: 2,
            ciudad: "Puerto Montt",
            direccion: "Calle Los Coihues 2415, Población Mirasol",
            horario: "Lunes a Sábado de 08:30 - 19:00 hrs",
        },
        {
            id: 3,
            ciudad: "Villarrica",
            direccion: "Av. Costanera Francisco Encina 680",
            horario: "Lunes a Domingo de 10:00 - 20:30 hrs",
        },
        {
            id: 4,
            ciudad: "Nacimiento",
            direccion: "Pasaje El Nogal 432",
            horario: "Lunes a Viernes de 08:00 - 17:30 (Sábados de 09:00 a 13:00 hrs)",
        },
        {
            id: 5,
            ciudad: "Viña del Mar",
            direccion: "Calle Los Cerros 1520",
            horario: "Lunes a Sábados de 09:00 - 18:30 hrs",
        },
        {
            id: 6,
            ciudad: "Valparaíso",
            direccion: "Subida Cerro Alegre 745",
            horario: "Lunes a Sábados de 08:00 - 18:00 hrs",
        },
        {
            id: 7,
            ciudad: "Concepción",
            direccion: "Av. Chacabuco 1135",
            horario: "Lunes a Viernes 08:30 a 18:00 hrs",
        },
    ];

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
                <section className={styles.paginaPrincipal}>
                    <h2>Centros de Distribución</h2>
                    <p>
                        En HuertoHogar, poseemos una gran cantidad de centros de distribución para que puedas adquirir
                        nuestros productos frescos y orgánicos como siempre lo hemos hecho. Es por esto que te dejamos las
                        direcciones de nuestros centros de distribución para que encuentres el más cercano a tu hogar.
                    </p>

                    <div className="mt-4">
                        {centrosDistribucion.map((centro) => (
                            <div key={centro.id} className={styles.centroDistribucion}>
                                <h4>
                                    <i className="bi bi-geo-fill"></i> {centro.ciudad}
                                </h4>
                                <p>{centro.direccion}</p>
                                <p>Horario: {centro.horario}</p>
                            </div>
                        ))}
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

export default Tiendas;