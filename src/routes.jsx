import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/inicio/inicio";
import Contacto from "./pages/contacto/contacto";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Inicio/>
    }
    ,
    {
        path:'/contacto',
        element:<Contacto/>
    }
]);