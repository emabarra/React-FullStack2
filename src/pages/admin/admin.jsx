import { Link } from "react-router-dom";
import styles from "./admin.module.css";
import Navbar_Admin from "../../components/navbarAdmin/navbarAdmin";

function Admin() {
  return (
    <>
      <Navbar_Admin/>

      <main className="py-4">
        <section id="vistas" className="mb-5">
          <div className={styles.cardContenedor}>
            <div className={styles.card}>
              <h3>Visualizaciones</h3>
              <i className="bi bi-eye-fill"></i>
              <p className="mt-2 mb-0">Visualizaciones Totales:</p>

              <p className={styles.monto}>4.500</p>
            </div>

            <div className={styles.card}>
              <h3>Compras</h3>
              <i className="bi bi-bag-fill"></i>
              <p className="mt-2 mb-0">Compras Totales:</p>
              <p className={styles.monto}>5.123</p>
            </div>

            <div className={styles.card}>
              <h3>Ganancias</h3>
              <i className="bi bi-cash-stack"></i>
              <p className="mt-2 mb-0">Ganancias Totales:</p>
              <p className={styles.monto}>$6.310.000</p>
            </div>
          </div>
        </section>

        <section id="contenido">
          <div className={styles.contenidoContenedor}>
            <h4>Bienvenido Usuario Administrador</h4>
            <p>
              En este panel podrás <strong>gestionar</strong> el contenido de tu
              página web, como pueden ser los productos, los usuarios de los
              administradores, etc.
            </p>
            <p>
              En caso de tener algún problema o duda sobre el funcionamiento del
              sitio web, puedes ir a la sección <strong>Ayuda</strong> en el pie
              de la página.
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContenido}>
          <p>&copy; Sitio web realizado por YZ spa - Versión 1.0</p>
          <div className={styles.footerNav}>
            <Link to="#">Políticas de Privacidad</Link>
            <Link to="#">Términos y Condiciones</Link>
            <Link to="#">Ayuda</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Admin;