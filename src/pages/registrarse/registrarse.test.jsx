import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Registrarse from "./registrarse";
import { expect, test } from "vitest"

test("Probando inputs del registro", () =>{
    render(
        <MemoryRouter>
            <Registrarse />
        </MemoryRouter>
    );

    const inputNombre = screen.getByLabelText("Nombre");
    const inputCorreo = screen.getByLabelText("Correo electrónico");
    const inputContraseña = screen.getByLabelText("Contraseña");

    fireEvent.change(inputNombre, { target: {value: "Benjamín" }});
    fireEvent.change(inputCorreo, { target: { value: "benjamin@ejemplo.com" }});
    fireEvent.change(inputContraseña, { target: { value: "contraseña123" }});

    expect(inputNombre.value).toBe("Benjamín");
    expect(inputCorreo.value).toBe("benjamin@ejemplo.com");
    expect(inputContraseña.value).toBe("contraseña123");
});