import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./gestionprod.module.css";
import Navbar_Admin from "../../components/navbarAdmin/navbarAdmin";

function GestionProductos() {
  const [productos, setProductos] = useState([
    {
      codigo: "VO001",
      nombre: "Zanahorias Orgánicas",
      descripcion:
        "Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins. Excelente fuente de vitamina A y fibra, ideales para ensaladas, jugos o como snack saludable.",
      precio: "1200",
      stock: "100",
      stockCrit: "20",
      categoria: "Verdura Organica",
    },
    {
      codigo: "VO002",
      nombre: "Espinacas Frescas",
      descripcion:
        "Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes. Cultivadas bajo prácticas orgánicas.",
      precio: "700",
      stock: "80",
      stockCrit: "15",
      categoria: "Verdura Organica",
    },
    {
      codigo: "VO003",
      nombre: "Pimientos Tricolores",
      descripcion:
        "Pimientos rojos, amarillos y verdes, ideales para salteados y platos coloridos. Ricos en antioxidantes y vitaminas.",
      precio: "1500",
      stock: "120",
      stockCrit: "30",
      categoria: "Verdura Organica",
    },
  ]);

  // Formulario Agregar / Modificar
  const [formProd, setFormProd] = useState({
    codigo: "",
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    stockCrit: "",
    categoria: "Fruta Fresca",
  });

  const [errorAgregar, setErrorAgregar] = useState("");
  const [exitoAgregar, setExitoAgregar] = useState("");

  // Formulario Eliminar
  const [codigoPE, setCodigoPE] = useState("");
  const [errorEli, setErrorEli] = useState("");
  const [exitoEli, setExitoEli] = useState("");

  const handleChange = (e) => {
    setFormProd({
      ...formProd,
      [e.target.name]: e.target.value,
    });
  };

  // Buscar Producto por Código
  const handleBuscar = () => {
    const encontrado = productos.find(
      (p) => p.codigo.toLowerCase() === formProd.codigo.trim().toLowerCase()
    );

    if (encontrado) {
      setFormProd(encontrado);
      setErrorAgregar("");
      setExitoAgregar("Producto encontrado y cargado en el formulario.");
    } else {
      setErrorAgregar("No se encontró ningún producto con ese código.");
      setExitoAgregar("");
    }
  };

  // Validar y Agregar / Modificar Producto
  const handleGuardar = (e) => {
    e.preventDefault();
    let messages = [];

    if (formProd.codigo.trim().length <= 2) {
      messages.push("El código del producto debe tener como mínimo 3 caracteres");
    }

    if (!formProd.nombre.trim()) {
      messages.push("El nombre del producto no puede estar vacío");
    } else if (formProd.nombre.length >= 100) {
      messages.push("El nombre del producto no puede tener más de 100 caracteres");
    }

    if (Number(formProd.precio) < 0 || formProd.precio === "") {
      messages.push("El precio del producto debe ser mínimo 0 (Gratis)");
    }

    if (Number(formProd.stock) < 0 || formProd.stock === "") {
      messages.push("El stock del producto debe ser mínimo 0");
    }

    if (messages.length > 0) {
      setErrorAgregar(messages.join(", "));
      setExitoAgregar("");
    } else {
      setErrorAgregar("");

      // Si ya existe, lo actualiza; si no, lo agrega
      const existeIndex = productos.findIndex(
        (p) => p.codigo.toLowerCase() === formProd.codigo.trim().toLowerCase()
      );

      if (existeIndex !== -1) {
        const copiaProds = [...productos];
        copiaProds[existeIndex] = formProd;
        setProductos(copiaProds);
        setExitoAgregar("¡Producto modificado correctamente!");
      } else {
        setProductos([...productos, formProd]);
        setExitoAgregar("¡Producto agregado correctamente!");
      }

      setFormProd({
        codigo: "",
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        stockCrit: "",
        categoria: "Fruta Fresca",
      });

      setTimeout(() => setExitoAgregar(""), 3000);
    }
  };

  // Validar y Eliminar Producto
  const handleEliminar = (e) => {
    e.preventDefault();
    if (codigoPE.trim().length <= 2) {
      setErrorEli("El código del producto debe tener como mínimo 3 caracteres");
      setExitoEli("");
      return;
    }

    const existe = productos.some(
      (p) => p.codigo.toLowerCase() === codigoPE.trim().toLowerCase()
    );

    if (!existe) {
      setErrorEli("No existe un producto con ese código.");
      setExitoEli("");
    } else {
      setProductos(
        productos.filter(
          (p) => p.codigo.toLowerCase() !== codigoPE.trim().toLowerCase()
        )
      );
      setErrorEli("");
      setExitoEli("¡Producto eliminado correctamente!");
      setCodigoPE("");

      setTimeout(() => setExitoEli(""), 3000);
    }
  };

  return (
    <>
    <Navbar_Admin/>

      <main className="py-4">
        {/* Lista de productos */}
        <section className="mb-5">
          <div className="container-lg">
            <div className="text-center mt-2">
              <h2>Lista de productos</h2>
              <div className="mt-3">
                <div className="list-group">
                  {productos.map((prod) => (
                    <div
                      key={prod.codigo}
                      className="list-group-item list-group-item-action flex-column align-items-start"
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1 text-success fw-bold">{prod.codigo}</h5>
                        <small className="text-muted">Stock: {prod.stock}</small>
                      </div>
                      <p className="mb-1 fw-bold">{prod.nombre}</p>
                      <small className="text-muted d-block">{prod.descripcion}</small>
                      <small className="fw-semibold text-primary">
                        Precio: ${Number(prod.precio).toLocaleString()} | Categoría: {prod.categoria}
                      </small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario Agregar / Modificar */}
        <section id="agregarprod" className="mb-5">
          <div className="container-lg">
            <div className="text-center">
              <h2>Agregar o Modificar Producto</h2>
              <p className="lead">
                Rellene los campos correctamente para agregar o modificar el producto deseado
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
                  <label htmlFor="codigoP" className="form-label">
                    Código del producto
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="codigoP"
                      name="codigo"
                      placeholder="e.g VO009"
                      value={formProd.codigo}
                      onChange={handleChange}
                      required
                    />
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={handleBuscar}
                    >
                      Buscar Producto
                    </button>
                  </div>

                  <label htmlFor="nombreP" className="form-label">
                    Nombre del Producto
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="nombreP"
                    name="nombre"
                    placeholder="e.g Patatas"
                    value={formProd.nombre}
                    onChange={handleChange}
                  />

                  <label htmlFor="descP" className="form-label">
                    Descripción del Producto (opcional)
                  </label>
                  <div className="mb-3">
                    <textarea
                      id="descP"
                      name="descripcion"
                      className="form-control"
                      style={{ height: "100px" }}
                      value={formProd.descripcion}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <label htmlFor="precioP" className="form-label">
                    Precio del Producto
                  </label>
                  <input
                    type="number"
                    step="any"
                    className="form-control mb-3"
                    id="precioP"
                    name="precio"
                    placeholder="e.g 9000"
                    value={formProd.precio}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="stockP" className="form-label">
                    Stock del Producto
                  </label>
                  <input
                    type="number"
                    className="form-control mb-3"
                    id="stockP"
                    name="stock"
                    placeholder="e.g 200"
                    value={formProd.stock}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="stockPcrit" className="form-label">
                    Stock Crítico del Producto
                  </label>
                  <input
                    type="number"
                    className="form-control mb-3"
                    id="stockPcrit"
                    name="stockCrit"
                    placeholder="e.g 50"
                    value={formProd.stockCrit}
                    onChange={handleChange}
                  />

                  <label htmlFor="categoriaP" className="form-label d-block">
                    Categoría del Producto
                  </label>
                  <select
                    name="categoria"
                    id="categoriaP"
                    className="form-select mb-3"
                    value={formProd.categoria}
                    onChange={handleChange}
                  >
                    <option value="Fruta Fresca">Fruta Fresca</option>
                    <option value="Producto Lácteo">Producto Lácteo</option>
                    <option value="Producto Organico">Producto Organico</option>
                    <option value="Verdura Organica">Verdura Organica</option>
                  </select>

                  <div className="mb-3">
                    <label htmlFor="imageUpload" className="form-label">
                      Cargar Imagen
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                    />
                  </div>

                  <div className="mt-4 text-center">
                    <button type="submit" className="btn btn-primary w-100">
                      Guardar Producto
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario Eliminar */}
        <section id="eliminarprod" className="mb-5">
          <div className="container-lg">
            <div className="text-center">
              <h2>Eliminar Producto</h2>
              <p className="lead">Ingrese el código del producto a eliminar</p>
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
                  <label htmlFor="codigoPE" className="form-label">
                    Código del producto
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="codigoPE"
                    placeholder="e.g VO009"
                    value={codigoPE}
                    onChange={(e) => setCodigoPE(e.target.value)}
                    required
                  />

                  <div className="mt-4 text-center">
                    <button type="submit" className="btn btn-danger w-100">
                      Eliminar Producto
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

export default GestionProductos;