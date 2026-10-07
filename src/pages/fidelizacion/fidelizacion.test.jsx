import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Fidelizacion from "./fidelizacion";
import { expect, test } from "vitest"

test("Probando múltiples inputs del formulario de fidelización", () =>{
    render(
        <MemoryRouter>
            <Fidelizacion />
        </MemoryRouter>
    );

    // Selecciona los inputs del formulario
    const inputNombre = screen.getByLabelText("Nombre");
    const inputApellido = screen.getByLabelText("Apellido");
    const inputCorreo = screen.getByLabelText("Correo");
    const inputTelefono = screen.getByLabelText("Teléfono");

    // Simula datos que se entregan en los imputs
    fireEvent.change(inputNombre, { target: { value: "Guillermo"}});
    fireEvent.change(inputApellido, { target: { value: "Villacura"}});
    fireEvent.change(inputCorreo, { target: { value: "guillermo.villacura@ejemplo.com" }});
    fireEvent.change(inputTelefono, { target: { value: "123456789" }});

    // Verifica que los valores de los inputs sean correctos
    expect(inputNombre.value).toBe("Guillermo");
    expect(inputApellido.value).toBe("Villacura");
    expect(inputCorreo.value).toBe("guillermo.villacura@ejemplo.com");
    expect(inputTelefono.value).toBe("123456789");
});