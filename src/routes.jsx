import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/inicio/inicio";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Inicio/>
    }
]);