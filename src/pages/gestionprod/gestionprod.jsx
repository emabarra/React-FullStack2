import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./gestionprod.module.css";
import Navbar_Admin from "../../components/navbarAdmin/navbarAdmin";
import App_alert from "../../components/alert/alert";

function GestionProductos() {
  const [productos, setProductos] = useState([
    {
      codigo: "VO001",
      nombre: "Zanahorias Orgánicas",
      descripcion:
        "Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins.",
      precio: "1200",
      stock: "100",
      stockCrit: "20",
      categoria: "Verdura Organica",
    },
    {
      codigo: "VO002",
      nombre: "Espinacas Frescas",
      descripcion:
        "Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes.",
      precio: "700",
      stock: "80",
      stockCrit: "15",
      categoria: "Verdura Organica",
    },
  ]);

  const [formProd, setFormProd] = useState({
    codigo: "",
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    stockCrit: "",
    categoria: "Fruta Fresca",
  });

  const [codigoPE, setCodigoPE] = useState("");

  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [variant, setVariant] = useState("danger");
  const [msg, setMsg] = useState("");

  const lanzarAlerta = (tipoVariant, mensaje) => {
    setVariant(tipoVariant);
    setMsg(mensaje);
    setMostrarAlerta(true);
  };

  const handleChange = (e) => {
    setFormProd({
      ...formProd,
      [e.target.name]: e.target.value,
    });
  };

  const handleBuscar = () => {
    const encontrado = productos.find(
      (p) => p.codigo.toLowerCase() === formProd.codigo.trim().toLowerCase()
    );

    if (encontrado) {
      setFormProd(encontrado);
      lanzarAlerta("success", "Producto encontrado y cargado en el formulario.");
    } else {
      lanzarAlerta("danger", "No se encontró ningún producto con ese código.");
    }
  };

  const handleGuardar = (e) => {
    e.preventDefault();

    if (formProd.codigo.trim().length < 3) {
      lanzarAlerta("danger", "El código del producto debe tener al menos 3 caracteres.");
      return;
    }

    if (!formProd.nombre.trim() || formProd.nombre.length > 100) {
      lanzarAlerta("danger", "El nombre es obligatorio y no puede superar los 100 caracteres.");
      return;
    }

    if (Number(formProd.precio) < 0 || formProd.precio === "") {
      lanzarAlerta("danger", "El precio del producto debe ser un número positivo o 0.");
      return;
    }

    if (Number(formProd.stock) < 0 || formProd.stock === "") {
      lanzarAlerta("danger", "El stock del producto debe ser un número positivo o 0.");
      return;
    }

    const existeIndex = productos.findIndex(
      (p) => p.codigo.toLowerCase() === formProd.codigo.trim().toLowerCase()
    );

    if (existeIndex !== -1) {
      const copiaProds = [...productos];
      copiaProds[existeIndex] = formProd;
      setProductos(copiaProds);
      lanzarAlerta("success", "¡Producto modificado correctamente!");
    } else {
      setProductos([...productos, formProd]);
      lanzarAlerta("success", "¡Producto agregado correctamente!");
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
  };

  const handleEliminar = (e) => {
    e.preventDefault();
    if (codigoPE.trim().length < 3) {
      lanzarAlerta("danger", "El código a eliminar debe tener al menos 3 caracteres.");
      return;
    }

    const existe = productos.some(
      (p) => p.codigo.toLowerCase() === codigoPE.trim().toLowerCase()
    );

    if (!existe) {
      lanzarAlerta("danger", "No existe un producto registrado con ese código.");
    } else {
      setProductos(
        productos.filter(
          (p) => p.codigo.toLowerCase() !== codigoPE.trim().toLowerCase()
        )
      );
      lanzarAlerta("success", "¡Producto eliminado correctamente!");
      setCodigoPE("");
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
              <h2>Lista de productos</h2>
              <div className="mt-3">
                <div className="list-group">
                  {productos.map((prod) => (
                    <div
                      key={prod.codigo}
                      className="list-group-item list-group-item-action flex-column align-items-start text-start"
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

        <section id="agregarprod" className="mb-5">
          <div className="container-lg">
            <div className="text-center">
              <h2>Agregar o Modificar Producto</h2>
            </div>
            <div className="row justify-content-center my-4">
              <div className="col-lg-8">
                <form onSubmit={handleGuardar}>
                  <Form.Label>Código del Producto</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      name="codigo"
                      placeholder="e.g VO009"
                      value={formProd.codigo}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={handleBuscar}
                    >
                      Buscar
                    </button>
                  </InputGroup>

                  <Form.Label>Nombre del Producto</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      name="nombre"
                      placeholder="e.g Patatas Orgánicas"
                      value={formProd.nombre}
                      onChange={handleChange}
                    />
                  </InputGroup>

                  <Form.Label>Descripción (opcional)</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      as="textarea"
                      name="descripcion"
                      rows={3}
                      value={formProd.descripcion}
                      onChange={handleChange}
                    />
                  </InputGroup>

                  <div className="row">
                    <div className="col-md-4">
                      <Form.Label>Precio ($)</Form.Label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          type="number"
                          name="precio"
                          placeholder="e.g 1200"
                          value={formProd.precio}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </div>
                    <div className="col-md-4">
                      <Form.Label>Stock</Form.Label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          type="number"
                          name="stock"
                          placeholder="e.g 100"
                          value={formProd.stock}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </div>
                    <div className="col-md-4">
                      <Form.Label>Stock Crítico</Form.Label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          type="number"
                          name="stockCrit"
                          placeholder="e.g 20"
                          value={formProd.stockCrit}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </div>
                  </div>

                  <Form.Label>Categoría</Form.Label>
                  <Form.Select
                    name="categoria"
                    className="mb-3"
                    value={formProd.categoria}
                    onChange={handleChange}
                  >
                    <option value="Fruta Fresca">Fruta Fresca</option>
                    <option value="Producto Lácteo">Producto Lácteo</option>
                    <option value="Producto Organico">Producto Orgánico</option>
                    <option value="Verdura Organica">Verdura Orgánica</option>
                  </Form.Select>

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

        <section id="eliminarprod" className="mb-5">
          <div className="container-lg">
            <div className="text-center">
              <h2>Eliminar Producto</h2>
            </div>
            <div className="row justify-content-center my-4">
              <div className="col-lg-6">
                <form onSubmit={handleEliminar}>
                  <Form.Label>Código del producto a eliminar</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="e.g VO009"
                      value={codigoPE}
                      onChange={(e) => setCodigoPE(e.target.value)}
                    />
                  </InputGroup>

                  <div className="mt-3 text-center">
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