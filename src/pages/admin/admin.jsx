import { Link } from "react-router-dom";
import styles from "./admin.module.css";

function Admin() {
  return (
    <>
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
                  <Link className="nav-link" to="/gestion-usuarios">
                    <i className="bi bi-people me-1"></i>Gestión de Usuarios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gestion-productos">
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