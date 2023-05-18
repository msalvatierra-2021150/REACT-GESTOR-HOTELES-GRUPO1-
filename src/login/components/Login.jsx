import { useState } from "react";
import { apiLogin } from "../api/apiLogin";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import { NavbarInicial } from "./NavbarInicial";

export const Login = () => {
  //Manejo del state del email y del password
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); //Para que la pagina no se recarge
    const result = await apiLogin(correo, password);
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Los datos ingresados son correctos",
        text: "Ha iniciado sesion correctamente",
        confirmButtonText: "Ok",
      }).then((r) => {
        if (r.isConfirmed) {
            const [header, payload, signature] = result.split('.');
            const decodedPayload = JSON.parse(atob(payload));
            const userRole = decodedPayload.rol;
            console.log(userRole);

          if (userRole == "ADMIN_APP") {
            window.location.href = "/panel-adminapp";
          } else if (userRole == "ADMIN_HOTEL") {
            window.location.href = "/panel-adminhotel";
          } else {
            window.location.href = "/home";
          }
        }
      });
    }
  };

  return (
    <>
      <NavbarInicial></NavbarInicial>
      <main className="contenedor seccion contenido-centrado">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit} className="formulario">
          <fieldset>
            <legend>Email y Password</legend>
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Tu Email"
              id="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(p) => setPassword(p.target.value)}
              required
            />

            <input type="submit" value="Iniciar Sesion" className="boton boton-verde" />
          </fieldset>
        </form>
        <Link to="/signin" className="boton boton-azul w-100">Eres nuevo? Crea una cuenta</Link>
        <Link className="boton boton-verde mt-3" to="/">Volver</Link>
      </main>
    </>
  );
};
