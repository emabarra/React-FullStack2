import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./gestionuser.module.css";
import Navbar_Admin from "../../components/navbarAdmin/navbarAdmin";
import App_alert from "../../components/alert/alert";
import SelectRegionComuna from "../../components/selectRegionComuna/selectRegionComuna";

function GestionUsuarios() {
  const [usuarios, setUsuarios] = useState([
    {
      run: "217897653",
      nombre: "Ernesto",
      apellidos: "Suazo",
      correo: "ernesto.suazo@gmail.cl",
      region: "Región Metropolitana de Santiago",
      comuna: "La Granja",
      tipo: "Cliente",
      direccion: "Av. La Serena 123",
    },
  ]);

  const [formUser, setFormUser] = useState({
    run: "",
    nombre: "",
    apellidos: "",
    correo: "",
    fechaNac: "",
    region: "",
    comuna: "",
    tipo: "Cliente",
    direccion: "",
  });

  const [runUserEli, setRunUserEli] = useState("");

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
      setFormUser({ ...formUser, region: value, comuna: "" });
    } else {
      setFormUser({ ...formUser, [name]: value });
    }
  };

  const handleBuscar = () => {
    const encontrado = usuarios.find(
      (u) => u.run.trim().toLowerCase() === formUser.run.trim().toLowerCase()
    );

    if (encontrado) {
      setFormUser(encontrado);
      lanzarAlerta("success", "Usuario encontrado y cargado en el formulario.");
    } else {
      lanzarAlerta("danger", "No se encontró ningún usuario con ese RUN.");
    }
  };

  const handleGuardar = (e) => {
    e.preventDefault();

    if (formUser.run.length < 7 || formUser.run.length > 9) {
      lanzarAlerta("danger", "El RUN debe tener entre 7 y 9 números sin puntos ni guión.");
      return;
    }

    if (formUser.nombre.trim().length < 2 || formUser.nombre.length > 50) {
      lanzarAlerta("danger", "El nombre debe contener entre 2 y 50 caracteres.");
      return;
    }


    if (!formUser.region) {
      lanzarAlerta("danger", "Por favor seleccione una Región.");
      return;
    }

    if (!formUser.comuna) {
      lanzarAlerta("danger", "Por favor seleccione una Comuna.");
      return;
    }

    const existeIndex = usuarios.findIndex(
      (u) => u.run.trim().toLowerCase() === formUser.run.trim().toLowerCase()
    );

    if (existeIndex !== -1) {
      const copiaUsers = [...usuarios];
      copiaUsers[existeIndex] = formUser;
      setUsuarios(copiaUsers);
      lanzarAlerta("success", "¡Usuario modificado con éxito!");
    } else {
      setUsuarios([...usuarios, formUser]);
      lanzarAlerta("success", "¡Usuario registrado con éxito!");
    }

    setFormUser({
      run: "",
      nombre: "",
      apellidos: "",
      correo: "",
      fechaNac: "",
      region: "",
      comuna: "",
      tipo: "Cliente",
      direccion: "",
    });
  };

  const handleEliminar = (e) => {
    e.preventDefault();

    if (runUserEli.trim().length < 7 || runUserEli.trim().length > 9) {
      lanzarAlerta("danger", "El RUN ingresado debe tener entre 7 y 9 dígitos.");
      return;
    }

    const existe = usuarios.some(
      (u) => u.run.trim().toLowerCase() === runUserEli.trim().toLowerCase()
    );

    if (!existe) {
      lanzarAlerta("danger", "No existe un usuario con ese RUN.");
    } else {
      setUsuarios(
        usuarios.filter(
          (u) => u.run.trim().toLowerCase() !== runUserEli.trim().toLowerCase()
        )
      );
      lanzarAlerta("success", "¡Usuario eliminado correctamente!");
      setRunUserEli("");
    }
  };

  return (
    <>
      <Navbar_Admin />

      <App_alert
        mostrarAlerta={mostrarAlerta}
        cerrarAlerta={() => setMostrarAlerta(false)}
        variant={variant}
        msg={msg}
      />

      <main className="py-4">
        <section className="mb-5">
          <div className="container-lg">
            <div className="text-center mt-2">
              <h2>Lista de usuarios</h2>
              <div className="mt-3">
                <div className="list-group">
                  {usuarios.map((user, idx) => (
                    <div
                      key={user.run || idx}
                      className="list-group-item list-group-item-action flex-column align-items-start text-start"
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1 text-success fw-bold">RUN: {user.run}</h5>
                        <small className="badge bg-secondary">{user.tipo}</small>
                      </div>
                      <p className="mb-1 fw-bold">
                        {user.nombre} {user.apellidos}
                      </p>
                      <small className="text-muted d-block">{user.correo}</small>
                      {user.region && user.comuna && (
                        <small className="text-primary">
                          {user.comuna}, {user.region}
                        </small>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="agregarUser" className="mb-5">
          <div className="container-lg">
            <div className="text-center">
              <h2>Agregar o Modificar Usuario</h2>
            </div>
            <div className="row justify-content-center my-4">
              <div className="col-lg-8">
                <form onSubmit={handleGuardar}>
                  <Form.Label>RUN del usuario (Sin puntos ni guión)</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      name="run"
                      placeholder="e.g 217897653"
                      value={formUser.run}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={handleBuscar}
                    >
                      Buscar Usuario
                    </button>
                  </InputGroup>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Label>Nombre</Form.Label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          name="nombre"
                          placeholder="e.g John"
                          value={formUser.nombre}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </div>
                    <div className="col-md-6">
                      <Form.Label>Apellidos</Form.Label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          name="apellidos"
                          placeholder="e.g Doe"
                          value={formUser.apellidos}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </div>
                  </div>

                  <Form.Label>Correo electrónico</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      name="correo"
                      placeholder="estudiante@gmail.cl"
                      value={formUser.correo}
                      onChange={handleChange}
                    />
                  </InputGroup>

                  <SelectRegionComuna
                    region={formUser.region}
                    comuna={formUser.comuna}
                    onChange={handleChange}
                  />

                  <Form.Label>Categoría de Usuario</Form.Label>
                  <Form.Select
                    name="tipo"
                    className="mb-3"
                    value={formUser.tipo}
                    onChange={handleChange}
                  >
                    <option value="Administrador">Administrador</option>
                    <option value="Cliente">Cliente</option>
                    <option value="Vendedor">Vendedor</option>
                  </Form.Select>

                  <Form.Label>Dirección</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      name="direccion"
                      placeholder="e.g Av. Siempre Viva 123"
                      value={formUser.direccion}
                      onChange={handleChange}
                    />
                  </InputGroup>

                  <div className="mt-4 text-center">
                    <button type="submit" className="btn btn-primary w-100">
                      Guardar Usuario
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="eliminarUser" className="mb-5">
          <div className="container-lg">
            <div className="text-center">
              <h2>Eliminar Usuario</h2>
            </div>
            <div className="row justify-content-center my-4">
              <div className="col-lg-6">
                <form onSubmit={handleEliminar}>
                  <Form.Label>RUN del usuario a eliminar</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="e.g 217897653"
                      value={runUserEli}
                      onChange={(e) => setRunUserEli(e.target.value)}
                    />
                  </InputGroup>

                  <div className="mt-3 text-center">
                    <button type="submit" className="btn btn-danger w-100">
                      Eliminar Usuario
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

export default GestionUsuarios;