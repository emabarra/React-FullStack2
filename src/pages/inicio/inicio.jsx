import { useNavigate, Link } from "react-router-dom";
import styles from "./inicio.module.css";
import Navbar_tienda from "../../components/navbar/navbar";

function Inicio() {
    const navigate = useNavigate();

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
        <>
        <Navbar_tienda/>
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
                    <Link onClick={irContacto} to="/contacto">
                        <i className="bi bi-telephone-fill"></i> Contacto
                    </Link>
                </div>
            </footer>
        </>
    );
}

export default Inicio;