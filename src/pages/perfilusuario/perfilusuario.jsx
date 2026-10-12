import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./perfilusuario.module.css";
import Navbar_Usuario from "../../components/navbarUsuario/navbarUsuario";

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

function PerfilUsuario() {
  const [perfil, setPerfil] = useState({
    nombre: "Eduardo",
    apellidos: "Bonvallet",
    correo: "EduardoBonvallet@Duocuc.cl",
    fechaNac: "1980-05-15",
    region: "Valparaíso",
    comuna: "Viña del Mar",
    direccion: "Avenida Siempre Viva 8723",
  });

  const [mensaje, setMensaje] = useState("");

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
    setMensaje("¡Cambios guardados con éxito!");
    setTimeout(() => setMensaje(""), 3000);
  };

  const comunasDisponibles =
    regionesYcomunas.find((r) => r.region === perfil.region)?.comunas || [];

  return (
    <>
    <Navbar_Usuario/>

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
            <div className="mt-4">
              <h2>Tu Perfil</h2>
              <p className="lead">Datos Personales</p>
            </div>
            <div className="row justify-content-center my-4">
              <div className="col-lg-6">
                {mensaje && (
                  <div className="text-success mb-3 fw-bold">{mensaje}</div>
                )}
                <form onSubmit={handleSubmit}>
                  <label htmlFor="nombreUser" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="nombreUser"
                    name="nombre"
                    placeholder="Eduardo"
                    value={perfil.nombre}
                    onChange={handleChange}
                  />

                  <label htmlFor="apellidosUser" className="form-label">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="apellidosUser"
                    name="apellidos"
                    placeholder="Bonvallet"
                    value={perfil.apellidos}
                    onChange={handleChange}
                  />

                  <label htmlFor="correoUser" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="correoUser"
                    name="correo"
                    placeholder="EduardoBonvallet@Duocuc.cl"
                    value={perfil.correo}
                    onChange={handleChange}
                  />

                  <label htmlFor="fechaNacUser" className="form-label">
                    Fecha de nacimiento
                  </label>
                  <input
                    className="form-control mb-3"
                    type="date"
                    id="fechaNacUser"
                    name="fechaNac"
                    value={perfil.fechaNac}
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
                        value={perfil.region}
                        onChange={handleChange}
                        required
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
                        value={perfil.comuna}
                        onChange={handleChange}
                        disabled={!perfil.region}
                        required
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

                  <label htmlFor="direccionUser" className="form-label">
                    Dirección del usuario
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="direccionUser"
                    name="direccion"
                    placeholder="e.g Avenida Siempre Viva 8723"
                    value={perfil.direccion}
                    onChange={handleChange}
                  />

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