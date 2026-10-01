import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/inicio/inicio";
import Contacto from "./pages/contacto/contacto";
import Fidelizacion from "./pages/fidelizacion/fidelizacion";
import Blog from "./pages/blog/blog";
import Tiendas from "./pages/tiendas/tiendas";
import Frutafresca from "./pages/frutafresca/frutafresca.jsx";
import VerdurasOrganica from "./pages/verduraorganica/verduraorganica.jsx";
import ProductosOrganicos from "./pages/productosorganicos/productosorganicoss";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Inicio />
    }
    ,
    {
        path:'/contacto',
        element:<Contacto />
    }
    ,
    {
        path:'/fidelizacion',
        element:<Fidelizacion />
    }
    ,
    {
        path:'/blog',
        element:<Blog />
    }
    ,
    {
        path:'/tiendas',
        element:<Tiendas />
    }
    ,
    {
        path:"/frutafresca",
        element:<Frutafresca />
    },
    {
        path:"/verduraorganica",
        element:<VerdurasOrganica/>
    }
    ,
    {
        path:'/productosorganicos',
        element:<ProductosOrganicos/>
    }
]);