import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./fidelizacion.module.css";
import Navbar_tienda from "../../components/navbar/navbar";

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
    function irContacto() {
        navigate("/contacto");
    }
    function irFidelizacion() {
        navigate("/fidelizacion");
    }
    function irBlog() {
        navigate("/blog");
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
            <Navbar_tienda/>
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