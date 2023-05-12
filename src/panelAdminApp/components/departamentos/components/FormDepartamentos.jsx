import React, { useState } from "react";
import { formDepartamentoHelper } from "../helpers/formDepartamentoHelper";

export const FormDepartamentos = (departamentosProp, option) => {
  const [departamento, setDepartamento] = useState(departamentosProp);
  


  const handleSubmit = (event) => {
    event.preventDefault();
    formDepartamentoHelper(departamento, 2);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-black">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={departamento.departamentosProp.nombre}
          onChange={(event) =>
            setDepartamento({
              departamentosProp: {
                ...departamento.departamentosProp,
                nombre: event.target.value,
              },
            })
          }
        />
      </div>
        <button id='btn-enviar' type="submit" className="btn btn-success" >
          Enviar
        </button>
    </form>
  );
};