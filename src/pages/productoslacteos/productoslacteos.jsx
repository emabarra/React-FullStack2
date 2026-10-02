import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./productoslacteos.module.css";
import Navbar_tienda from "../../components/navbar/navbar";
import App_alert from "../../components/alert/alert";

const LLAVE_CARRITO = "carrito";

function ProductosLacteos(){
    const navigate = useNavigate();

    const productos = [
        {
            id: "PL001",
            nombre: "Yogurt",
            precio: 2500,
            stock: 25,
            descripcion:
                "Nacido en el corazón del campo chileno, este yogur rústico rescata la autenticidad del campo en cada cucharada. Elaborado artesanalmente con leche entera y fresca de vacas criadas en libre pastoreo, destaca por su textura espesa, cremosa y ese toque ácido tan característico de las recetas de antes. Sin conservantes, espesantes ni procesos industriales: solo fermentos naturales, paciencia y el sabor puro de la naturaleza.",
            imagen: "/imagenes/yogurt.jpg",
        },
        {
            id: "PL002",
            nombre: "Queso Gauda Artesanal",
            precio: 8900,
            stock: 45,
            descripcion:
                "Queso Gauda de elaboración artesanal, madurado a la perfección en cavas climatizadas. Ideal para sándwiches, tablas de queso o fundir. De textura semi-dura y sabor suave con un ligero toque a nuez.",
            imagen: "/imagenes/quesillo.jpg",
        },
        {
            id: "PL003",
            nombre: "Mantequilla de Campo",
            precio: 4500,
            stock: 70,
            descripcion:
                "Mantequilla tradicional batida a partir de crema fresca, con un toque de sal de mar. Ideal para untar en pan amasado, repostería y salteados. Reconocida por su color amarillo intenso y sabor auténtico a campo.",
            imagen: "/imagenes/mantequilla.jpg",
        }

    ];

    const [carrito, setCarrito] = useState([]);
    const [mensajeCompra, setMensajeCompra] = useState("");

    const [showAlert,setShowAlert] = useState(false);
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
            setMsgAlert("El carrito no debe estar vacio.");
            setShowAlert(true);
            return true;
        }

        setMensajeCompra("¡Gracias por tu compra! Tu pedido ha sido procesado exitosamente.");
        guardarYActualizarCarrito([]);
    }
    const total = carrito.reduce(
        (sum, item) => sum + (item.precioCalculado || item.precio || item.precioPorKg || item.precioPor500g || 0),
        0
    );

    function irInicio() {
        navigate("/");
    }

    return(
        <>
            <Navbar_tienda />
            <App_alert mostrarAlerta={showAlert} cerrarAlerta={() => setShowAlert(false)} variant={disenoAlert} msg={msgAlert}/>

            <main>
                <section className={styles.descProducto}>
                    <div className={styles.contenedorDesc}>
                        <h2>Productos Lácteos</h2>
                        <p>
                            Los productos lácteos de HuertoHogar provienen de granjas locales que se dedican a la producción
                            responsable y de calidad. Ofrecemos una gama de leches, yogures y otros derivados que conservan su
                            frescura y sabor auténtico. Ricos en calcio y nutrientes esenciales, nuestros lácteos son perfectos
                            para complementar una dieta equilibrada.
                        </p>
                    </div>
                </section>

                {/* Vista del Carrito */}
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

                {/* Grilla de Productos */}
                <section>
                    <div className={styles.contenedorCard}>
                        {productos.map((prod) => (
                            <div key={prod.id} className={styles.card}>
                                <h3>{prod.nombre}</h3>
                                <img src={prod.imagen} alt={prod.nombre} />
                                <p className={styles.precioStock}>Precio: ${prod.precio.toLocaleString()}</p>
                                <p className={styles.precioStock}>Stock: {prod.stock} unidades de 500g</p>
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

export default ProductosLacteos;