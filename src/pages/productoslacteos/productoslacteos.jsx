import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./productoslacteos.module.css";

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
}