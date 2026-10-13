import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./perfilusuario.module.css";
import Navbar_Usuario from "../../components/navbarUsuario/navbarUsuario";
import App_alert from "../../components/alert/alert";
import SelectRegionComuna from "../../components/selectRegionComuna/selectRegionComuna";

function PerfilUsuario() {
  const [perfil, setPerfil] = useState({
    nombre: "Eduardo",
    apellidos: "Bonvallet",
    correo: "EduardoBonvallet@gmail.cl",
    fechaNac: "1980-05-15",
    region: "Valparaíso",
    comuna: "Viña del Mar",
    direccion: "Avenida Siempre Viva 8723",
  });

  // Estado para las Alertas
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [variant, setVariant] = useState("danger");
  const [msg, setMsg] = useState("");

  const lanzarAlerta = (tipoVariant, mensaje) => {
    setVariant(tipoVariant);
    setMsg(mensaje);
    setMostrarAlerta(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "region") {
      setPerfil({ ...perfil, region: value, comuna: "" });
    } else {
      setPerfil({ ...perfil, [name]: value });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (perfil.nombre.trim().length < 2 || perfil.nombre.length > 50) {
      lanzarAlerta("danger", "El nombre debe contener entre 2 y 50 caracteres.");
      return;
    }

    if (perfil.apellidos.trim().length < 2 || perfil.apellidos.length > 50) {
      lanzarAlerta("danger", "El apellido debe contener entre 2 y 50 caracteres.");
      return;
    }

    if (!perfil.region) {
      lanzarAlerta("danger", "Por favor seleccione una Región.");
      return;
    }

    if (!perfil.comuna) {
      lanzarAlerta("danger", "Por favor seleccione una Comuna.");
      return;
    }

    if (perfil.direccion.trim().length < 5) {
      lanzarAlerta("danger", "La dirección ingresada es muy corta (mínimo 5 caracteres).");
      return;
    }

    // Éxito
    lanzarAlerta("success", "¡Cambios guardados con éxito!");
  };

  return (
    <>
      <Navbar_Usuario />

      <App_alert
        mostrarAlerta={mostrarAlerta}
        cerrarAlerta={() => setMostrarAlerta(false)}
        variant={variant}
        msg={msg}
      />

      <main className="py-4">
        <section id="contenido">
          <div className={styles.contenidoContenedor}>
            <div className="row w-100">
              <div className="mt-3">
                <h4>Bienvenido Usuario</h4>
              </div>
            </div>
          </div>
        </section>

        <section id="agregarUser" className="mb-5">
          <div className="container-lg">
            <div className="mt-4 text-center">
              <h2>Tu Perfil</h2>
              <p className="lead">Datos Personales</p>
            </div>
            <div className="row justify-content-center my-4">
              <div className="col-lg-8">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Label htmlFor="nombreUser">Nombre</Form.Label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          type="text"
                          id="nombreUser"
                          name="nombre"
                          placeholder="Eduardo"
                          value={perfil.nombre}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </div>

                    <div className="col-md-6">
                      <Form.Label htmlFor="apellidosUser">Apellidos</Form.Label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          type="text"
                          id="apellidosUser"
                          name="apellidos"
                          placeholder="Bonvallet"
                          value={perfil.apellidos}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </div>
                  </div>

                  <Form.Label htmlFor="correoUser">Correo Electrónico</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="email"
                      id="correoUser"
                      name="correo"
                      placeholder="EduardoBonvallet@gmail.cl"
                      value={perfil.correo}
                      onChange={handleChange}
                    />
                  </InputGroup>

                  <Form.Label htmlFor="fechaNacUser">Fecha de nacimiento</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="date"
                      id="fechaNacUser"
                      name="fechaNac"
                      value={perfil.fechaNac}
                      onChange={handleChange}
                    />
                  </InputGroup>

                  {/* Componente Modular de Región y Comuna */}
                  <SelectRegionComuna
                    region={perfil.region}
                    comuna={perfil.comuna}
                    onChange={handleChange}
                  />

                  <Form.Label htmlFor="direccionUser">Dirección</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="text"
                      id="direccionUser"
                      name="direccion"
                      placeholder="e.g. Avenida Siempre Viva 8723"
                      value={perfil.direccion}
                      onChange={handleChange}
                    />
                  </InputGroup>

                  <div className="mt-4 text-center">
                    <button type="submit" className="btn btn-primary w-100">
                      Guardar Cambios
                    </button>
                  </div>
                </form>
              </div>
            </div>
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

export default PerfilUsuario;