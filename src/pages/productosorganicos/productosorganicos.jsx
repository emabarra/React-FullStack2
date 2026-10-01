import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./productosorganicos.module.css";
import Navbar_tienda from "../../components/navbar/navbar";

const LLAVE_CARRITO = "carrito";

function ProductosOrganicos() {
    const navigate = useNavigate();

    const productos = [
        {
            id: "PO001",
            nombre: "Miel Orgánica",
            precioPor500g: 5000,
            stock: 50,
            descripcion:
                "Miel pura y orgánica producida por apicultores locales. Rica en antioxidantes y con un sabor inigualable, perfecta para endulzar de manera natural tus comidas y bebidas.",
            imagen: "/imagenes/organic-honey.jpg",
        },
        {
            id: "PO002",
            nombre: "Avena Integral Orgánica",
            precioPor500g: 3500,
            stock: 250,
            descripcion:
                "Avena integral orgánica de grano entero, procesada cuidadosamente para mantener sus nutrientes. Perfecta para el desayuno, batidos o repostería saludable. Destaca por su alto contenido en fibra.",
            imagen: "/imagenes/avena.jpg",
        },
    ];

    const [carrito, setCarrito] = useState([]);
    const [mensajeCompra, setMensajeCompra] = useState("");

    // Cargar el carrito guardado al iniciar el componente
    useEffect(() => {
        const storageActual = localStorage.getItem(LLAVE_CARRITO);
        if (storageActual) {
            try {
                setCarrito(JSON.parse(storageActual));
            } catch (error) {
                setCarrito([]);
            }
        }
    }, []);

    // Guardar en localStorage cada vez que cambie el carrito
    const guardarYActualizarCarrito = (nuevoCarrito) => {
        setCarrito(nuevoCarrito);
        localStorage.setItem(LLAVE_CARRITO, JSON.stringify(nuevoCarrito));
    };

    function agregarAlCarrito(producto) {
        // Formateamos el objeto para que coincida con la estructura del carrito (usada en otras páginas)
        const itemParaCarrito = {
            ...producto,
            // Guardamos el precio bajo un nombre genérico o específico para calcular el total
            precioCalculado: producto.precioPor500g 
        };
        const nuevoCarrito = [...carrito, itemParaCarrito];
        guardarYActualizarCarrito(nuevoCarrito);
        setMensajeCompra("");
    }

    function eliminarDelCarrito(indexEliminar) {
        const nuevoCarrito = carrito.filter((_, index) => index !== indexEliminar);
        guardarYActualizarCarrito(nuevoCarrito);
    }

    function finalizarCompra() {
        if (carrito.length === 0) {
            alert("El carrito está vacío.");
            return;
        }

        setMensajeCompra("¡Gracias por tu compra! Tu pedido ha sido procesado exitosamente.");
        guardarYActualizarCarrito([]);
    }

    // El cálculo del total verifica 'precioCalculado' (de orgánicos) o 'precioPorKg' (de frutas)
    const total = carrito.reduce((sum, item) => sum + (item.precioCalculado || item.precioPorKg || 0), 0);

    function irInicio() {
        navigate("/");
    }

    return (
        <>  
            <Navbar_tienda />
            <main>
                <section className={styles.descProducto}>
                    <div className={styles.contenedorDesc}>
                        <h2>Productos Orgánicos</h2>
                        <p>
                            Nuestros productos orgánicos están elaborados con ingredientes naturales y procesados de manera
                            responsable para mantener sus beneficios saludables. Desde aceites y miel hasta granos y semillas,
                            ofrecemos una selección que apoya un estilo de vida saludable y respetuoso con el medio ambiente.
                            Estos productos son perfectos para quienes buscan opciones alimenticias que aporten bienestar sin
                            comprometer el sabor ni la calidad.
                        </p>
                    </div>
                </section>

                {/* Sección Carrito (Unificada y sincronizada con localStorage) */}
                <section className={styles.seccionCarrito}>
                    <h2>Carrito de Compras</h2>
                    {carrito.length === 0 ? (
                        <p className="text-muted">El carrito está vacío.</p>
                    ) : (
                        <ul className={styles.listaCarrito}>
                            {carrito.map((item, index) => (
                                <li key={index} className={styles.itemCarrito}>
                                    <span>
                                        {item.nombre} - ${ (item.precioCalculado || item.precioPorKg || 0).toLocaleString() }
                                    </span>
                                    <button
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={() => eliminarDelCarrito(index)}
                                    >
                                        Eliminar
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}

                    <p className={styles.totalCarrito}>Total: ${total.toLocaleString()}</p>

                    <button className="btn btn-success" onClick={finalizarCompra}>
                        Finalizar compra
                    </button>

                    {mensajeCompra && <div className="mt-3 text-success fw-bold">{mensajeCompra}</div>}
                </section>

                {/* Catálogo de Productos Orgánicos */}
                <section>
                    <div className={styles.contenedorCard}>
                        {productos.map((prod) => (
                            <div key={prod.id} className={styles.card}>
                                <h3>{prod.nombre}</h3>
                                <img src={prod.imagen} alt={prod.nombre} />
                                <p className={styles.precioStock}>Precio por 500g: ${prod.precioPor500g.toLocaleString()}</p>
                                <p className={styles.precioStock}>Stock disponible: {prod.stock} frascos/paquetes</p>
                                <p>{prod.descripcion}</p>
                                <div className={styles.contenedorBtn}>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => agregarAlCarrito(prod)}
                                    >
                                        Agregar al carrito
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContenido}>
                    <p>&copy; Sitio web realizado por YZ spa - Versión 1.0</p>
                    <a href="#"><i className="bi bi-instagram"></i> Instagram</a>{" "}
                    <a href="#"><i className="bi bi-tiktok"></i> Tiktok</a>{" "}
                    <a href="#"><i className="bi bi-facebook"></i> Facebook</a>{" "}
                    <Link to="/contacto">
                        <i className="bi bi-telephone-fill"></i> Contacto
                    </Link>
                </div>
            </footer>
        </>
    );
}

export default ProductosOrganicos;