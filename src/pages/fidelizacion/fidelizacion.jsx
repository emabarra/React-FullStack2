import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./fidelizacion.module.css";

const LLAVE_STORAGE = "usuarios";

function Fidelizacion() {
    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");

    function irInicio() {
        navigate("/");
    }

    function enviar(e) {
        e.preventDefault();

        if (nombre.trim() === "" || nombre.trim().length < 3) {
            alert("Debes ingresar un nombre válido.");
        } else if (apellido.trim() === "" || apellido.trim().length < 3) {
            alert("Debes ingresar un apellido válido.");
        } else if (correo.trim() === "") {
            alert("Debes ingresar un correo electrónico.");
        } else if (telefono.trim() === "" || telefono.trim().length < 6) {
            alert("Debes ingresar un teléfono válido.");
        } else {
            const usuario = [
                {
                    nombre: nombre,
                    apellido: apellido,
                    "correo electronico": correo,
                    telefono: telefono,
                },
            ];

            localStorage.setItem(LLAVE_STORAGE, JSON.stringify(usuario));

            const storage = localStorage.getItem(LLAVE_STORAGE);
            console.log("STORAGE SIN PARSE: ", storage);
            console.log("STORAGE CON PARSE: ", JSON.parse(storage));

            alert("Formulario enviado exitosamente");

            // Limpiar formulario
            setNombre("");
            setApellido("");
            setCorreo("");
            setTelefono("");
        }
    }

    return (
        <>
            <header>
                <nav className={`navbar navbar-expand-lg ${styles.miClase}`}>
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
                <section id="formulario" className={styles.formularioSection}>
                    <div className="container">
                        <h1>¿En qué consiste nuestra fidelización?</h1>
                        <p>
                            Nuestro sistema de fidelización se centra en <strong>ofertas especiales</strong> para nuestros
                            clientes. Lo único que tienes que hacer es llenar este <strong>formulario</strong> y te llegarán
                            ofertas imperdibles.
                        </p>
                        <h2 className="mt-4">Ingresa tus datos</h2>

                        <form onSubmit={enviar}>
                            <div className="row">
                                <div className="col-12 col-md-6 mt-3">
                                    <label htmlFor="txtNombre" className="form-label">Nombre</label>
                                    <input
                                        id="txtNombre"
                                        className="form-control"
                                        type="text"
                                        placeholder="Ingrese su nombre"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </div>

                                <div className="col-12 col-md-6 mt-3">
                                    <label htmlFor="txtApellido" className="form-label">Apellido</label>
                                    <input
                                        id="txtApellido"
                                        className="form-control"
                                        type="text"
                                        placeholder="Ingrese su apellido"
                                        value={apellido}
                                        onChange={(e) => setApellido(e.target.value)}
                                    />
                                </div>

                                <div className="col-12 col-md-6 mt-3">
                                    <label htmlFor="txtCorreo" className="form-label">Correo</label>
                                    <input
                                        id="txtCorreo"
                                        className="form-control"
                                        type="email"
                                        placeholder="Ingrese su correo"
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                    />
                                </div>

                                <div className="col-12 col-md-6 mt-3">
                                    <label htmlFor="txtTelefono" className="form-label">Teléfono</label>
                                    <input
                                        id="txtTelefono"
                                        className="form-control"
                                        type="text"
                                        placeholder="Ingrese su teléfono ej: 912345678"
                                        value={telefono}
                                        onChange={(e) => setTelefono(e.target.value)}
                                    />
                                </div>

                                <div className={`${styles.contenedorBtn} col-12 mt-4`}>
                                    <button type="submit" className="btn btn-success">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
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

export default Fidelizacion;