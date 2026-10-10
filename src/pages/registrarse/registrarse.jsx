import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./registrarse.module.css";
import Navbar_tienda from "../../components/navbar/navbar";
import App_alert from "../../components/alert/alert";

function Registrarse() {
    const [txtNombre, setTxtNombre] = useState("");
    const [txtCorreo, setTxtCorreo] = useState("");
    const [txtContrasena, setTxtContrasena] = useState("");

    // Estados para la alerta
    const [showAlert, setShowAlert] = useState(false);
    const [msgAlert, setMsgAlert] = useState("");
    const [disenoAlert, setDisenoAlert] = useState("primary");

    function validarTexto(valor, nombreCampo) {
        if (valor.trim().length === 0) {
            setDisenoAlert("danger");
            setMsgAlert("El campo " + nombreCampo + " no debe estar vacío.");
            setShowAlert(true);
            return true;
        }
        return false;
    }

    function registrarse() {
        if (validarTexto(txtNombre, "nombre") === true) {
            return;
        } else if (validarTexto(txtCorreo, "correo electrónico") === true) {
            return;
        } else if (validarTexto(txtContrasena, "contraseña") === true) {
            return;
        } else {
            setDisenoAlert("success");
            setMsgAlert("Se ha creado el usuario exitosamente.");
            setShowAlert(true);

            // Limpiar formulario
            setTxtNombre("");
            setTxtCorreo("");
            setTxtContrasena("");
        }
    }

    return (
        <>
            <Navbar_tienda />
            <App_alert
                mostrarAlerta={showAlert}
                cerrarAlerta={() => setShowAlert(false)}
                variant={disenoAlert}
                msg={msgAlert}
            />

            <main className={styles.container}>
                <div className={styles.formCard}>
                    <div className="mb-2 text-center">
                        <i className="bi bi-person-plus display-4 text-success"></i>
                    </div>

                    <h1 className={styles.title}>Registrarse</h1>

                    <label htmlFor="txtNombre" className={styles.label}>
                        Nombre
                    </label>
                    <input
                        type="text"
                        placeholder="Escriba su nombre"
                        id="txtNombre"
                        className={styles.inputField}
                        value={txtNombre}
                        onChange={(e) => setTxtNombre(e.target.value)}
                    />

                    <label htmlFor="txtCorreo" className={styles.label}>
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        placeholder="Escriba su correo electrónico"
                        id="txtCorreo"
                        className={styles.inputField}
                        value={txtCorreo}
                        onChange={(e) => setTxtCorreo(e.target.value)}
                    />

                    <label htmlFor="txtContrasena" className={styles.label}>
                        Contraseña
                    </label>
                    <input
                        type="password"
                        placeholder="Ingrese una contraseña"
                        id="txtContrasena"
                        className={styles.inputField}
                        value={txtContrasena}
                        onChange={(e) => setTxtContrasena(e.target.value)}
                    />

                    <button type="button" onClick={registrarse} className={styles.btnRegistrar}>
                        Registrarse
                    </button>

                    <Link to="/login" className={styles.link}>
                        Volver al login
                    </Link>
                </div>
            </main>
        </>
    );
}

export default Registrarse;