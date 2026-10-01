import { useNavigate, Link } from "react-router-dom";
import styles from "./blog.module.css";
import Navbar_tienda from "../../components/navbar/navbar";

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
        <Navbar_tienda/>
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