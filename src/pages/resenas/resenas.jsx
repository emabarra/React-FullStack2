import React from "react";
import styles from "./resenas.module.css";
import Navbar_tienda from "../../components/navbar/navbar";

function Resenas() {
  const resena = {
    autor: "Juan Pérez",
    calificacion: 5,
    fecha: "23-10-2026",
    comentario: "Excelente servicio, las frutas y verduras llegaron súper frescas a mi hogar. Muy satisfecho con la calidad de Huerto Hogar.",
    imagen: "/imagenes/ImagenResena.jpeg"
  };

  const renderEstrellas = (score) => {
    return '★'.repeat(score) + '☆'.repeat(5 - score);
  };

  return (
    <div className={styles.pageLayout}>
      {/* Componente Navbar */}
      <Navbar_tienda />

      {/* Banner de título */}
      <section className={styles.banner}>
        <div className="container text-center py-3">
          <h2>Reseñas de Nuestros Clientes</h2>
        </div>
      </section>

      {/* Contenido Principal */}
      <main className={`container ${styles.mainContent}`}>
        <div className={styles.resenaCard}>
          <div className={styles.resenaHeader}>
            <strong className={styles.resenaAutor}>{resena.autor}</strong>
            <span className={styles.resenaFecha}>{resena.fecha}</span>
          </div>
          
          <div className={styles.resenaEstrellas}>
            {renderEstrellas(resena.calificacion)}
          </div>
          
          <p className={styles.resenaComentario}>{resena.comentario}</p>

          <div className={styles.resenaImagenContainer}>
            <img 
              src={resena.imagen} 
              alt="Foto adjunta en la reseña" 
              className={styles.resenaImagen} 
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Resenas;