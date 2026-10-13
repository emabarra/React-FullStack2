import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./historialCompras.module.css";
import Navbar_Usuario from "../../components/navbarUsuario/navbarUsuario";
import SelectRegionComuna from "../../components/selectRegionComuna/selectRegionComuna";

function HistorialCompras() {
  const [compras] = useState([
    {
      codigo: "VO001",
      nombre: "Zanahorias Orgánicas",
      detalle: "1 kg - Cultivadas en O'Higgins",
      precio: 1200,
      fecha: "2026-10-02",
      estado: "Entregado",
    },
    {
      codigo: "PO001",
      nombre: "Miel Orgánica Natural",
      detalle: "Frasco 500g",
      precio: 4500,
      fecha: "2026-09-25",
      estado: "Entregado",
    },
    {
      codigo: "PL001",
      nombre: "Leche Entera de Campo",
      detalle: "Botella 1L",
      precio: 1300,
      fecha: "2026-09-18",
      estado: "Entregado",
    },
    {
      codigo: "VO001",
      nombre: "Zanahorias Orgánicas",
      detalle: "2 kg - Cultivadas en O'Higgins",
      precio: 2400,
      fecha: "2026-09-01",
      estado: "Entregado",
    },
  ]);

  return (
    <>
    <Navbar_Usuario/>

      <main className="py-4">
        <section id="contenido">
          <div className={styles.contenidoContenedor}>
            <div className="row w-100">
              <div className="mt-4">
                <h4>Historial de Compras</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <div className="container-lg">
            <div className="text-center mt-4 mb-4">
              <h2>Lista de productos comprados</h2>
              <div className="mt-3">
                <div className="list-group">
                  {compras.map((item, index) => (
                    <div
                      key={index}
                      className="list-group-item list-group-item-action flex-column align-items-start text-start my-1 shadow-sm"
                    >
                      <div className="d-flex w-100 justify-content-between align-items-center">
                        <h5 className="mb-1 text-success fw-bold">{item.codigo}</h5>
                        <small className="badge bg-success">{item.estado}</small>
                      </div>
                      <p className="mb-1 fw-bold fs-5">{item.nombre}</p>
                      <small className="text-muted d-block mb-1">{item.detalle}</small>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <small className="fw-bold text-primary fs-6">
                          Monto: ${item.precio.toLocaleString()}
                        </small>
                        <small className="text-secondary">Fecha: {item.fecha}</small>
                      </div>
                    </div>
                  ))}
                </div>
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

export default HistorialCompras;