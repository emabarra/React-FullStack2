import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./gestionuser.module.css";
import Navbar_Admin from "../../components/navbarAdmin/navbarAdmin";

const regionesYcomunas = [
  {
    region: "Arica y Parinacota",
    comunas: ["Arica", "Camarones", "Putre", "General Lagos"],
  },
  {
    region: "Tarapacá",
    comunas: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
  },
  {
    region: "Antofagasta",
    comunas: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
  },
  {
    region: "Atacama",
    comunas: ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
  },
  {
    region: "Coquimbo",
    comunas: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
  },
  {
    region: "Valparaíso",
    comunas: ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
  },
  {
    region: "Región del Libertador Gral. Bernardo O'Higgins",
    comunas: ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
  },
  {
    region: "Región del Maule",
    comunas: ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
  },
  {
    region: "Región de Ñuble",
    comunas: ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"],
  },
  {
    region: "Región del Biobío",
    comunas: ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"],
  },
  {
    region: "Región de la Araucanía",
    comunas: ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
  },
  {
    region: "Región de Los Ríos",
    comunas: ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
  },
  {
    region: "Región de Los Lagos",
    comunas: ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
  },
  {
    region: "Región Aisén del Gral. Carlos Ibáñez del Campo",
    comunas: ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O'Higgins", "Tortel", "Chile Chico", "Río Ibáñez"],
  },
  {
    region: "Región de Magallanes y de la Antártica Chilena",
    comunas: ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"],
  },
  {
    region: "Región Metropolitana de Santiago",
    comunas: ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Buin", "Calera de Tango", "Paine", "San Bernardo", "Alhué", "Curacaví", "María Pinto", "Melipilla", "San Pedro", "Talagante", "Colina", "Lampa", "Tiltil", "Santiago"],
  },
];

function GestionUsuarios() {
  const [usuarios, setUsuarios] = useState([
    {
      run: "217897653",
      nombre: "Ernesto",
      apellidos: "Suazo",
      correo: "ernesto.suazo@duocuc.cl",
      fechaNac: "1995-04-12",
      region: "Región Metropolitana de Santiago",
      comuna: "La Granja",
      tipo: "Cliente",
      direccion: "Av. La Serena 123",
    },
    {
      run: "189423112",
      nombre: "Julio",
      apellidos: "Casanova",
      correo: "julio.casanova@duocuc.cl",
      fechaNac: "1988-11-23",
      region: "Región Metropolitana de Santiago",
      comuna: "Santiago",
      tipo: "Cliente",
      direccion: "Alameda 456",
    },
    {
      run: "154329871",
      nombre: "Eduardo",
      apellidos: "Bonvallet",
      correo: "eduardo.bonvallet@duocuc.cl",
      fechaNac: "1975-08-30",
      region: "Valparaíso",
      comuna: "Viña del Mar",
      tipo: "Administrador",
      direccion: "Av. Libertad 789",
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

  const [errorAgregar, setErrorAgregar] = useState("");
  const [exitoAgregar, setExitoAgregar] = useState("");

  const [runUserEli, setRunUserEli] = useState("");
  const [errorEli, setErrorEli] = useState("");
  const [exitoEli, setExitoEli] = useState("");

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
      setErrorAgregar("");
      setExitoAgregar("Usuario encontrado y cargado en el formulario.");
    } else {
      setErrorAgregar("No se encontró ningún usuario con ese RUN.");
      setExitoAgregar("");
    }
  };

  const handleGuardar = (e) => {
    e.preventDefault();
    let messages = [];

    if (formUser.run.length < 7 || formUser.run.length > 9) {
      messages.push("El RUN del cliente debe tener como mínimo 7 caracteres y máximo 9");
    }

    if (!formUser.nombre.trim()) {
      messages.push("El nombre del usuario es necesario");
    } else if (formUser.nombre.length > 50) {
      messages.push("El nombre del usuario no puede tener más de 50 caracteres");
    }

    if (formUser.apellidos.length > 100) {
      messages.push("Los apellidos del usuario no pueden tener más de 100 caracteres");
    }

    if (!formUser.correo.trim()) {
      messages.push("El correo del usuario no puede estar vacío");
    } else if (formUser.correo.length > 100) {
      messages.push("El correo del usuario no puede tener más de 100 caracteres");
    }

    if (formUser.direccion.length > 300) {
      messages.push("La dirección del usuario no puede tener más de 300 caracteres");
    }

    if (messages.length > 0) {
      setErrorAgregar(messages.join(", "));
      setExitoAgregar("");
    } else {
      setErrorAgregar("");

      const existeIndex = usuarios.findIndex(
        (u) => u.run.trim().toLowerCase() === formUser.run.trim().toLowerCase()
      );

      if (existeIndex !== -1) {
        const copiaUsers = [...usuarios];
        copiaUsers[existeIndex] = formUser;
        setUsuarios(copiaUsers);
        setExitoAgregar("¡Usuario modificado correctamente!");
      } else {
        setUsuarios([...usuarios, formUser]);
        setExitoAgregar("¡Usuario agregado correctamente!");
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

      setTimeout(() => setExitoAgregar(""), 3000);
    }
  };

  const handleEliminar = (e) => {
    e.preventDefault();

    if (runUserEli.trim().length < 7 || runUserEli.trim().length > 9) {
      setErrorEli("El RUN del cliente debe tener como mínimo 7 caracteres y máximo 9");
      setExitoEli("");
      return;
    }

    const existe = usuarios.some(
      (u) => u.run.trim().toLowerCase() === runUserEli.trim().toLowerCase()
    );

    if (!existe) {
      setErrorEli("No existe un usuario con ese RUN.");
      setExitoEli("");
    } else {
      setUsuarios(
        usuarios.filter(
          (u) => u.run.trim().toLowerCase() !== runUserEli.trim().toLowerCase()
        )
      );
      setErrorEli("");
      setExitoEli("¡Usuario eliminado correctamente!");
      setRunUserEli("");

      setTimeout(() => setExitoEli(""), 3000);
    }
  };

  const comunasDisponibles =
    regionesYcomunas.find((r) => r.region === formUser.region)?.comunas || [];

  return (
    <>
    <Navbar_Admin/>

      <main className="py-4">
        {/* Lista de Usuarios */}
        <section className="mb-5">
          <div className="container-lg">
            <div className="text-center mt-2">
              <h2>Lista de usuarios</h2>
              <div className="mt-3">
                <div className="list-group">
                  {usuarios.map((user, idx) => (
                    <div
                      key={user.run || idx}
                      className="list-group-item list-group-item-action flex-column align-items-start"
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

        {/* Formulario Agregar / Modificar */}
        <section id="agregarUser" className="mb-5">
          <div className="container-lg">
            <div className="text-center">
              <h2>Agregar o Modificar Usuarios</h2>
              <p className="lead">
                Rellene los campos correctamente para agregar o modificar el usuario deseado
              </p>
            </div>
            <div className="row justify-content-center my-4">
              <div className="col-lg-6">
                {errorAgregar && (
                  <div className="text-danger mb-3 fw-bold">{errorAgregar}</div>
                )}
                {exitoAgregar && (
                  <div className="text-success mb-3 fw-bold">{exitoAgregar}</div>
                )}

                <form onSubmit={handleGuardar}>
                  <label htmlFor="runUser" className="form-label">
                    RUN del usuario (Sin puntos ni guión)
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="runUser"
                      name="run"
                      placeholder="e.g 217897653"
                      value={formUser.run}
                      onChange={handleChange}
                      required
                    />
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={handleBuscar}
                    >
                      Buscar Usuario
                    </button>
                  </div>

                  <label htmlFor="nombreUser" className="form-label">
                    Nombre del usuario
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="nombreUser"
                    name="nombre"
                    placeholder="e.g John"
                    value={formUser.nombre}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="apellidosUser" className="form-label">
                    Apellidos del usuario
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="apellidosUser"
                    name="apellidos"
                    placeholder="e.g Doe"
                    value={formUser.apellidos}
                    onChange={handleChange}
                  />

                  <label htmlFor="correoUser" className="form-label">
                    Correo del usuario
                  </label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="correoUser"
                    name="correo"
                    placeholder="e.g johndoe@duocuc.cl"
                    value={formUser.correo}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="fechaNacUser" className="form-label">
                    Fecha de nacimiento del usuario
                  </label>
                  <input
                    className="form-control mb-3"
                    type="date"
                    id="fechaNacUser"
                    name="fechaNac"
                    value={formUser.fechaNac}
                    onChange={handleChange}
                  />

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="regionUser" className="form-label">
                        Región
                      </label>
                      <select
                        className="form-select"
                        id="regionUser"
                        name="region"
                        value={formUser.region}
                        onChange={handleChange}
                      >
                        <option value="">Seleccione una región...</option>
                        {regionesYcomunas.map((item) => (
                          <option key={item.region} value={item.region}>
                            {item.region}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="comunaUser" className="form-label">
                        Comuna
                      </label>
                      <select
                        className="form-select"
                        id="comunaUser"
                        name="comuna"
                        value={formUser.comuna}
                        onChange={handleChange}
                        disabled={!formUser.region}
                      >
                        <option value="">Seleccione una comuna...</option>
                        {comunasDisponibles.map((comuna) => (
                          <option key={comuna} value={comuna}>
                            {comuna}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <label htmlFor="tipoUsuario" className="form-label">
                    Categoría del usuario
                  </label>
                  <select
                    className="form-select mb-3"
                    id="tipoUsuario"
                    name="tipo"
                    value={formUser.tipo}
                    onChange={handleChange}
                  >
                    <option value="Administrador">Administrador</option>
                    <option value="Cliente">Cliente</option>
                    <option value="Vendedor">Vendedor</option>
                  </select>

                  <label htmlFor="direccionUser" className="form-label">
                    Dirección del usuario
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="direccionUser"
                    name="direccion"
                    placeholder="e.g Avenida Siempre Viva 8723"
                    value={formUser.direccion}
                    onChange={handleChange}
                  />

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

        {/* Formulario Eliminar */}
        <section id="eliminarUser" className="mb-5">
          <div className="container-lg">
            <div className="text-center">
              <h2>Eliminar Usuario</h2>
              <p className="lead">Ingrese el RUN del usuario a eliminar</p>
            </div>
            <div className="row justify-content-center my-4">
              <div className="col-lg-6">
                {errorEli && (
                  <div className="text-danger mb-3 fw-bold">{errorEli}</div>
                )}
                {exitoEli && (
                  <div className="text-success mb-3 fw-bold">{exitoEli}</div>
                )}
                <form onSubmit={handleEliminar}>
                  <label htmlFor="runUserEli" className="form-label">
                    RUN del usuario
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="runUserEli"
                    placeholder="e.g 217897653"
                    value={runUserEli}
                    onChange={(e) => setRunUserEli(e.target.value)}
                    required
                  />

                  <div className="mt-4 text-center">
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