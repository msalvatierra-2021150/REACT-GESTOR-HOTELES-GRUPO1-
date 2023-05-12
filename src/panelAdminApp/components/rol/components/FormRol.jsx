import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiRol } from "../api/apiRol";
import { formOptions, formUserHelper } from "../helpers/formUserHelper";

export const FormRol = ({ rolProp, titleButton, option }) => {
  const [rol, setRol] = useState(rolProp);

  const viewRolList = async () => {
    const getListRolesFromAPI = await apiRol();
    setRol(getListRolesFromAPI);
  };

  useEffect(() => {
    setRol(rolProp);
    viewRolList();
  }, [rolProp]);


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm(formOptions);

  // Actualiza el valor del input si la prop `hotelProp` cambia
  useEffect(() => {
    setValue("rol", rolProp.rol);

  }, [rolProp, setValue]);


  const crud = async (data) => {
    console.log(rolProp);

    if  (rolProp._id === "") {
      return formUserHelper (data, 1);
    };

    data._id = rolProp._id;
    formUserHelper(data, 2);
    // ... lógica para manejo de formulario ...
  };

  return (
    <>
      <main>
        <Link className="boton boton-verde" to="/Roles">
          Volver
        </Link>
        <form className="formulario" onSubmit={handleSubmit(async (data) => await crud(data))}>
          <fieldset className="mt-5">
            <legend>Roles</legend>
            <label>Nombre del Rol</label>
            <input
              {...register("rol")}
              type="text"
              className="form-control"
              value={rol.rol}
              onChange={(event) => {
                setRol((prevRol) => ({
                  ...prevRol,
                  rol: event.target.value,
                }));
              }}
            />
            {errors.rol && <span>{errors.rol.message}</span>}
          </fieldset>
          <button type="submit" className="btn btn-success">
            {titleButton}
          </button>
        </form>
      </main>
    </>
  );
};
