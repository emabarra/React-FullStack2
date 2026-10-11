import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./login";
import { expect, test } from "vitest"

test("Probando inputs del Login de usuarios", () =>{
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    const inputUsuario = screen.getByLabelText("Usuario");
    const inputContraseña = screen.getByLabelText("Contraseña");

    fireEvent.change(inputUsuario, { target: { value: "usuario" }});
    fireEvent.change(inputContraseña, { target: { value: "1234" }});

    expect(inputUsuario.value).toBe("usuario");
    expect(inputContraseña.value).toBe("1234");
});