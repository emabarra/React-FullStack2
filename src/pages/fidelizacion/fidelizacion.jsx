import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./fidelizacion.module.css";

const LLAVE_STORAGE = "usuarios";

function Fidelizacion(){
    const navigate = useNavigaet();

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");

    function irInicio(){
        navigaet("/")
    }
    function enviar(e){
        e.preventDefault();

        if(nombre.trim() === "" || nombre.trim().length < 3){
            alert("El nombre es obligatorio o debe tener al menos 3 caracteres");
        }else if(apellido.trim() === "" || apellido.trim().length < 3){
            alert("El apellido es obligatorio o debe tener al menos 3 caracteres");
        }else if(correo.trim() === ""){
            alert("El correo es obligatorio");
        }else if(telefono.trim() === "" || telefono.trim().length < 6){
            altert("El teléfono es obligatorio o debe tener al menos 6 dígitos");
        }else{
            const usuario = [{
                nombre: nombre,
                apellido: apellido,
                "Correo electronico": correo,
                telefono: telefono
            }];

            localStorage.setItem(LLAVE_STORAGE, JSON.stringify(usuario));

            const storage = localStorage.getItem(LLAVE_STORAGE);
            console.log("STORAGE SIN PARSE: ", storage);
            console.log("STORAGE CON PARSE: ", JSON.parse(storage));

            alert("Formulario enviado exitosamente");

            setNombre("");
            setApellido("");
            setCorreo("");
            setTelefono("");
        }

    }
}