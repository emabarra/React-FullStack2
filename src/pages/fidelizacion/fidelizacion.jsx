import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./fidelizacion.module.css";
import Navbar_tienda from "../../components/navbar/navbar";
import App_alert from "../../components/alert/alert";

const LLAVE_STORAGE = "usuarios";

function Fidelizacion() {
    // Estados adaptados al patrón txt[Campo]
    const [txtNombre, setTxtNombre] = useState("");
    const [txtApellido, setTxtApellido] = useState("");
    const [txtCorreo, setTxtCorreo] = useState("");
    const [txtTelefono, setTxtTelefono] = useState("");

    // Estados de alerta
    const [showAlert, setShowAlert] = useState(false);
    const [msgAlert, setMsgAlert] = useState("");
    const [disenoAlert, setDisenoAlert] = useState("primary");

    // Función de validación para campos de texto
    function validarTexto(valor, campo) {
        if (valor.trim().length === 0) {
            setDisenoAlert("danger");
            setMsgAlert("El campo " + campo + " no debe estar vacío.");
            setShowAlert(true);
            return true;
        }
        if (valor.trim().length < 3) {
            setDisenoAlert("danger");
            setMsgAlert("El campo " + campo + " debe tener al menos 3 caracteres.");
            setShowAlert(true);
            return true;
        }
        return false;
    }

    // Función de validación específica para teléfono
    function validarTelefono(valor, campo) {
        if (valor.trim().length === 0) {
            setDisenoAlert("danger");
            setMsgAlert("El campo " + campo + " no debe estar vacío.");
            setShowAlert(true);
            return true;
        }
        if (valor.trim().length < 6) {
            setDisenoAlert("danger");
            setMsgAlert("El campo " + campo + " debe ingresar un teléfono válido (mínimo 6 dígitos).");
            setShowAlert(true);
            return true;
        }
        return false;
    }

    // Función guardar con la lógica paso a paso
    function guardar() {
        if (validarTexto(txtNombre, "nombre") === true) {
            return;
        } else if (validarTexto(txtApellido, "apellido") === true) {
            return;
        } else if (validarTexto(txtCorreo, "correo") === true) {
            return;
        } else if (validarTelefono(txtTelefono, "teléfono") === true) {
            return;
        } else {
            const usuario = [
                {
                    nombre: txtNombre,
                    apellido: txtApellido,
                    "correo electronico": txtCorreo,
                    telefono: txtTelefono,
                },
            ];

            localStorage.setItem(LLAVE_STORAGE, JSON.stringify(usuario));

            const storage = localStorage.getItem(LLAVE_STORAGE);
            console.log("STORAGE SIN PARSE: ", storage);
            console.log("STORAGE CON PARSE: ", JSON.parse(storage));

            setDisenoAlert("success");
            setMsgAlert("Formulario enviado exitosamente");
            setShowAlert(true);

            // Limpiar formulario
            setTxtNombre("");
            setTxtApellido("");
            setTxtCorreo("");
            setTxtTelefono("");
        }
    }

    return (
        <>
            <App_alert
                mostrarAlerta={showAlert}
                cerrarAlerta={() => setShowAlert(false)}
                variant={disenoAlert}
                msg={msgAlert}
            />
            <Navbar_tienda />

            <main>
                <section id="formulario" className={styles.formularioSection}>
                    <div className="container my-4">
                        <h1>¿En qué consiste nuestra fidelización?</h1>
                        <p>
                            Nuestro sistema de fidelización se centra en <strong>ofertas especiales</strong> para nuestros
                            clientes. Lo único que tienes que hacer es llenar este <strong>formulario</strong> y te llegarán
                            ofertas imperdibles.
                        </p>
                        <h2 className="mt-4">Ingresa tus datos</h2>

                        <div className="row">
                            <div className="col-12 col-md-6 mt-3">
                                <label htmlFor="txtNombre" className="form-label">
                                    Nombre
                                </label>
                                <input
                                    id="txtNombre"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese su nombre"
                                    value={txtNombre}
                                    onChange={(e) => setTxtNombre(e.target.value)}
                                />
                            </div>

                            <div className="col-12 col-md-6 mt-3">
                                <label htmlFor="txtApellido" className="form-label">
                                    Apellido
                                </label>
                                <input
                                    id="txtApellido"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese su apellido"
                                    value={txtApellido}
                                    onChange={(e) => setTxtApellido(e.target.value)}
                                />
                            </div>

                            <div className="col-12 col-md-6 mt-3">
                                <label htmlFor="txtCorreo" className="form-label">
                                    Correo
                                </label>
                                <input
                                    id="txtCorreo"
                                    className="form-control"
                                    type="email"
                                    placeholder="Ingrese su correo"
                                    value={txtCorreo}
                                    onChange={(e) => setTxtCorreo(e.target.value)}
                                />
                            </div>

                            <div className="col-12 col-md-6 mt-3">
                                <label htmlFor="txtTelefono" className="form-label">
                                    Teléfono
                                </label>
                                <input
                                    id="txtTelefono"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese su teléfono ej: 912345678"
                                    value={txtTelefono}
                                    onChange={(e) => setTxtTelefono(e.target.value)}
                                />
                            </div>

                            <div className={`${styles.contenedorBtn} col-12 mt-4`}>
                                <button onClick={guardar} className="btn btn-success">
                                    Guardar
                                </button>
                            </div>
                        </div>
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