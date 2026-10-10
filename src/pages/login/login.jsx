import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./login.module.css";
import Navbar_tienda from "../../components/navbar/navbar";
import App_alert from "../../components/alert/alert";

function Login() {
    const navigate = useNavigate();

    const [txtUsuario, setTxtUsuario] = useState("");
    const [txtContrasena, setTxtContrasena] = useState("");

    const [showAlert, setShowAlert] = useState(false);
    const [msgAlert, setMsgAlert] = useState("");
    const [disenoAlert, setDisenoAlert] = useState("danger");

    function loguear() {
        if (txtUsuario.trim() === "" || txtContrasena.trim() === "") {
            setDisenoAlert("warning");
            setMsgAlert("Debes ingresar tanto el usuario como la contraseña.");
            setShowAlert(true);
            return;
        }

        if (txtUsuario === "usuario" && txtContrasena === "1234") {
            navigate("/perfil-usuario");
        } else if (txtUsuario === "admin" && txtContrasena === "1234") {
            navigate("/perfil-admin");
        } else {
            setDisenoAlert("danger");
            setMsgAlert("Contraseña o Usuario Incorrecto.");
            setShowAlert(true);
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

            <main className={styles.loginContainer}>
                <div className={styles.formCard}>
                    <img
                        src="/imagenes/user_84308.png"
                        alt="usuario-imagen"
                        className={styles.userImg}
                    />

                    <label htmlFor="usuario" className={styles.label}>
                        Usuario
                    </label>
                    <input
                        type="text"
                        placeholder="Ingrese Nombre de Usuario"
                        id="usuario"
                        className={styles.inputField}
                        value={txtUsuario}
                        onChange={(e) => setTxtUsuario(e.target.value)}
                    />

                    <label htmlFor="contrasena" className={styles.label}>
                        Contraseña
                    </label>
                    <input
                        type="password"
                        placeholder="Ingrese Contraseña"
                        id="contrasena"
                        className={styles.inputField}
                        value={txtContrasena}
                        onChange={(e) => setTxtContrasena(e.target.value)}
                    />

                    <button type="button" onClick={loguear} className={styles.btnLogin}>
                        Iniciar Sesión
                    </button>

                    <Link to="/" className={styles.link}>
                        Volver
                    </Link>
                    <Link to="/olvido-contrasena" className={styles.link}>
                        ¿Olvidaste tu contraseña?
                    </Link>
                    <Link to="/registrarse" className={styles.link}>
                        ¿No tienes cuenta?
                    </Link>
                </div>
            </main>
        </>
    );
}

export default Login;