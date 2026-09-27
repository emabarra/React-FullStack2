import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



function Nosotros() {

    const navigate = useNavigate();

    function irAlInicio() {
        console.log("11111");
        navigate('/');
    }


    const {idFruta} = useParams();
    console.log("FRUUTA: ", idFruta);


    return(
        <React.Fragment>
        <h1>NUMERO DE FRUTA: {idFruta}</h1>
        <h1>NOSOTROS</h1>
        <button onClick={irAlInicio}>Ir al inicio    </button>

        <Link to="/">
        <button>Ir a otra página</button>
        </Link>

        </React.Fragment>
    );
}

export default Nosotros;