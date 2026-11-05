import { request } from "./client";

export const login = (username, password) => request("/login", "POST", { username, password });
export const registrarse = (username, password) => request("/registrarse", "POST", { username, password });