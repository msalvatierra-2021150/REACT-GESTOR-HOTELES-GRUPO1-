import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { departamento } from "../models/Departamentos.models";
import { formDepartamentoHelper } from "../helpers/formDepartamentoHelper";

export const CreateDepartamentos = () => {
  const [depa, setDepa] = useState(departamento);

  useEffect(() => {
    setDepa({ ...depa });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    formDepartamentoHelper(depa, 1);
  };

  return (
    <>
      <main>
        <Link className="boton boton-verde" to="/hoteles">
          Volver
        </Link>
        <form className="formulario" onSubmit={handleSubmit}>
          <fieldset className="mt-5">
            <legend>Informacion General</legend>
            <label>Nombre del departamento</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              onChange={(event) =>
                setDepa({
                  departamento: {
                    ...depa.nombre,
                    nombre: event.target.value,
                  },
                })
              }
            />
          </fieldset>
          <button type="submit">Enviar</button>
        </form>
      </main>
    </>
  );
};
