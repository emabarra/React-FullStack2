import { useNavigate, Link } from "react-router-dom";
import styles from "./blog.module.css";

const LLAVE = "noticias_leidas";

function Blog() {
    const navigate = useNavigate();

    const noticias = [
        {
            id: "NT1",
            titulo: "Nuevo artículo en The Lancet demuestra que el paquete de políticas de alimentación saludable de Chile reduce el exceso de peso en niños y niñas",
            imagen: "/imagenes-noticias/etiquetados.jpg",
            link: "https://uchile.cl/noticias/241375/the-lancet-ley-chilena-reduce-exceso-de-peso-en-la-infancia",
        },
        {
            id: "NT2",
            titulo: "Alimentación y desigualdad: el alto costo de comer bien en Chile",
            imagen: "/imagenes-noticias/feriaLibre.jpg",
            link: "https://www.biobiochile.cl/noticias/opinion/columnas-bbcl/2026/08/12/alimentacion-y-desigualdad-el-alto-costo-de-comer-bien-en-chile.shtml",
        },
        {
            id: "NT3",
            titulo: "Organizaciones exigen reactivar normas ambientales al Gobierno y advierten sus efectos en la salud",
            imagen: "/imagenes-noticias/organizaciones.jpeg",
            link: "https://www.latercera.com/sustentabilidad/noticia/organizaciones-exigen-reactivar-normas-ambientales-al-gobierno-y-advierten-sus-efectos-en-la-salud/",
        },
        {
            id: "NT4",
            titulo: "Cien años de parques nacionales en Chile: el balance de un siglo de conservación",
            imagen: "/imagenes-noticias/parquesNacionales.jpeg",
            link: "https://www.latercera.com/nacional/noticia/cien-anos-de-parques-nacionales-en-chile-el-balance-de-un-siglo-de-conservacion/",
        },
    ];

    function irInicio() {
        navigate("/");
    }

    function verNoticia(noticia) {
        let lista = [];
        const storageActual = localStorage.getItem(LLAVE);

        if (storageActual !== null) {
            try {
                lista = JSON.parse(storageActual);
            } catch (error) {
                lista = [];
            }
        }

        lista.push(noticia);
        localStorage.setItem(LLAVE, JSON.stringify(lista));

        window.open(noticia.link, "_blank", "noopener,noreferrer");
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
                    <div className="container">
                        <h2>Blog</h2>
                        <p>
                            Bienvenido/a a nuestro blog. En este espacio compartiremos noticias sobre{" "}
                            <strong>alimentación saludable y medio ambiente</strong>.
                        </p>
                    </div>
                </section>

                <section id="noticias">
                    <div className={styles.contenedorCard}>
                        {noticias.map((item) => (
                            <div key={item.id} className={styles.card}>
                                <h1>{item.titulo}</h1>
                                <img src={item.imagen} alt={item.titulo} />
                                <a
                                    href={item.link}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        verNoticia(item);
                                    }}
                                >
                                    Leer noticia
                                </a>
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

export default Blog;