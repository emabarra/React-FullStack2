import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./verduraorganica.module.css";
import Navbar_tienda from "../../components/navbar/navbar";
import App_alert from "../../components/alert/alert";

const LLAVE_CARRITO = "carrito";

function VerdurasOrganicas() {
    const navigate = useNavigate();

    const productos = [
        {
            id: "VR001",
            nombre: "Zanahorias Orgánicas",
            precio: 1200,
            stock: 100,
            descripcion:
                "Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins. Excelente fuente de vitamina A y fibra, ideales para ensaladas, jugos o como snack saludable.",
            imagen: "/imagenes/Zanahoria-org.jpg",
        },
        {
            id: "VR002",
            nombre: "Espinacas Frescas",
            precio: 700,
            stock: 80,
            descripcion:
                "Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes. Estas espinacas son cultivadas bajo prácticas orgánicas que garantizan su calidad y valor nutricional.",
            imagen: "/imagenes/fresh-spinach.jpg",
        },
        {
            id: "VR003",
            nombre: "Pimientos Tricolores",
            precio: 1500,
            stock: 120,
            descripcion:
                "Pimientos rojos, amarillos y verdes, ideales para salteados y platos coloridos. Ricos en antioxidantes y vitaminas, estos pimientos añaden un toque vibrante y saludable a cualquier receta.",
            imagen: "/imagenes/tricolor-pim.jpg",
        },
        {
            id: "VR004",
            nombre: "Brócoli Orgánico",
            precio: 1800,
            stock: 60,
            descripcion:
                "Brócoli fresco de cultivo orgánico, libre de pesticidas. Perfecto para cocinar al vapor, saltear o incorporar en sopas. Cultivado en suelos ricos que garantizan un color verde intenso y alto valor nutricional.",
            imagen: "/imagenes/brocoli.jpg",
        },
        {
            id: "VR005",
            nombre: "Tomates Cherry Orgánicos",
            precio: 2000,
            stock: 90,
            descripcion:
                "Tomates cherry vibrantes y llenos de sabor, cultivados bajo estrictos estándares orgánicos. Ideales para ensaladas frescas, picoteos o asados. Poseen un equilibrio perfecto entre acidez y dulzor.",
            imagen: "/imagenes/tomatecherry.jpg",
        },
    ];

    const [carrito, setCarrito] = useState([]);
    const [mensajeCompra, setMensajeCompra] = useState("");

    const [showAlert, setShowAlert] = useState(false);
    const [msgAlert, setMsgAlert] = useState("");
    const [disenoAlert, setDisenoAlert] = useState("primary");

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

    const guardarYActualizarCarrito = (nuevoCarrito) => {
        setCarrito(nuevoCarrito);
        localStorage.setItem(LLAVE_CARRITO, JSON.stringify(nuevoCarrito));
    };

    function agregarAlCarrito(producto) {
        const itemParaCarrito = {
            ...producto,
            precioCalculado: producto.precio,
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
            setDisenoAlert("warning");
            setMsgAlert("El carrito no debe estar vacío.");
            setShowAlert(true);
            return;
        }

        setMensajeCompra("¡Gracias por tu compra! Tu pedido ha sido procesado exitosamente.");
        guardarYActualizarCarrito([]);
    }

    const total = carrito.reduce(
        (sum, item) => sum + (item.precioCalculado || item.precio || item.precioPorKg || item.precioPor500g || 0),
        0
    );

    return (
        <>
            <Navbar_tienda />
            <App_alert
                mostrarAlerta={showAlert}
                cerrarAlerta={() => setShowAlert(false)}
                variant={disenoAlert}
                msg={msgAlert}
            />

            <main>
                <section className={styles.descProducto}>
                    <div className={styles.contenedorDesc}>
                        <h2>Verduras Orgánicas</h2>
                        <p>
                            Descubre nuestra gama de verduras orgánicas, cultivadas sin el uso de pesticidas ni químicos,
                            garantizando un sabor auténtico y natural. Cada verdura es seleccionada por su calidad y valor
                            nutricional, ofreciendo una excelente fuente de vitaminas, minerales y fibra. Ideales para ensaladas,
                            guisos y platos saludables, nuestras verduras orgánicas promueven una alimentación consciente y
                            sostenible.
                        </p>
                    </div>
                </section>

                <section className={styles.seccionCarrito}>
                    <h2>Carrito de Compras</h2>
                    {carrito.length === 0 ? (
                        <p className="text-muted">El carrito está vacío.</p>
                    ) : (
                        <ul className={styles.listaCarrito}>
                            {carrito.map((item, index) => (
                                <li key={index} className={styles.itemCarrito}>
                                    <span>
                                        {item.nombre} - ${ (item.precioCalculado || item.precio || item.precioPorKg || item.precioPor500g || 0).toLocaleString() }
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

                <section>
                    <div className={styles.contenedorCard}>
                        {productos.map((prod) => (
                            <div key={prod.id} className={styles.card}>
                                <h3>{prod.nombre}</h3>
                                <img src={prod.imagen} alt={prod.nombre} />
                                <p className={styles.precioStock}>Precio por kg: ${prod.precio.toLocaleString()}</p>
                                <p className={styles.precioStock}>Stock disponible: {prod.stock} kg</p>
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

export default VerdurasOrganicas;