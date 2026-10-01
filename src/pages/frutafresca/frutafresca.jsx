import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./frutaFresca.module.css";
import Navbar_tienda from "../../components/navbar/navbar";

const LLAVE_CARRITO = "carrito";

function FrutasFrescas() {
    const navigate = useNavigate();

    const productos = [
        {
            id: "FR001",
            nombre: "Manzanas Fuji",
            precioPorKg: 1200,
            stockEnKg: 150,
            descripcion:
                "Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres. Estas Manzanas son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido.",
            imagen: "/imagenes/ManzanaFuji.jpg",
        },
        {
            id: "FR002",
            nombre: "Naranjas Valencia",
            precioPorKg: 1000,
            stockEnKg: 200,
            descripcion:
                "Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para jugos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas que aseguran su dulzura y jugosidad.",
            imagen: "/imagenes/NaranjaValencia.jpeg",
        },
        {
            id: "FR003",
            nombre: "Uvas Thompson",
            precioPorKg: 2500,
            stockEnKg: 80,
            descripcion:
                "Uvas Thompson dulces y sin semilla, cultivadas en los soleados valles de la zona central. Excelentes para disfrutar frescas o en ensaladas de frutas. Destacan por su piel fina y gran jugosidad.",
            imagen: "/imagenes/uvas.jpg",
        },
        {
            id: "FR004",
            nombre: "Peras Packham",
            precioPorKg: 1400,
            stockEnKg: 120,
            descripcion:
                "Peras Packham jugosas y de textura suave, originarias de huertos del sur. Ideales para consumo directo o compotas. Estas peras son reconocidas por su pulpa blanca y sabor delicado.",
            imagen: "/imagenes/peras.jpg",
        },
        {
            id: "FR005",
            nombre: "Arándanos Frescos",
            precioPorKg: 4000,
            stockEnKg: 110,
            descripcion:
                "Arándanos frescos y firmes, cosechados a mano en la región de La Araucanía. Perfectos para batidos, repostería o como un snack rico en antioxidantes. Destacan por su intenso color azul y sabor dulce con un ligero toque ácido.",
            imagen: "/imagenes/arandanos.jpg",
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
        const nuevoCarrito = [...carrito, producto];
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

    const total = carrito.reduce((sum, item) => sum + item.precioPorKg, 0);

    function irInicio() {
        navigate("/");
    }

    return (
        <>
        <Navbar_tienda/>
            <main>
                <section className={styles.descProducto}>
                    <div className={styles.contenedorDesc}>
                        <h2>Frutas Frescas</h2>
                        <p>
                            Nuestra selección de frutas frescas ofrece una experiencia directa del campo a tu hogar.
                            Estas frutas se cultivan y cosechan en el punto óptimo de madurez para asegurar su sabor y frescura.
                            Disfruta de una variedad de frutas de temporada que aportan vitaminas y nutrientes esenciales a tu
                            dieta diaria.
                        </p>
                    </div>
                </section>

                {/* Sección Carrito de Compras */}
                <section className={styles.seccionCarrito}>
                    <h2>Carrito de Compras</h2>
                    {carrito.length === 0 ? (
                        <p className="text-muted">El carrito está vacío.</p>
                    ) : (
                        <ul className={styles.listaCarrito}>
                            {carrito.map((item, index) => (
                                <li key={index} className={styles.itemCarrito}>
                                    <span>
                                        {item.nombre} - ${item.precioPorKg.toLocaleString()} / kg
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

                {/* Catálogo de Productos */}
                <section>
                    <div className={styles.contenedorCard}>
                        {productos.map((prod) => (
                            <div key={prod.id} className={styles.card}>
                                <h3>{prod.nombre}</h3>
                                <img src={prod.imagen} alt={prod.nombre} />
                                <p className={styles.precioStock}>Precio por kg: ${prod.precioPorKg.toLocaleString()}</p>
                                <p className={styles.precioStock}>Stock disponible: {prod.stockEnKg} kg</p>
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

export default FrutasFrescas;