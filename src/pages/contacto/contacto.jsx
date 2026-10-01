import { useNavigate, Link } from "react-router-dom";
import styles from "./contacto.module.css";
import Navbar_tienda from "../../components/navbar/navbar";

function Contacto() {
    const navigate = useNavigate();

    function irInicio() {
        navigate("/");
    }

    return (
        <>
            <Navbar_tienda />
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