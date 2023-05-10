import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { formOptions } from "../helpers/formUserHelper";
import { apiUsuario } from "../api/apiHotel";

export const FormHotel = ({ hotelProp, titleButton, option }) => {
  const [usuario, setUsuario] = useState([]);
  const [hotel, setHotel] = useState(hotelProp);

  const viewUserList = async () => {
    const getListUsersFromAPI = await apiUsuario();
    setUsuario(getListUsersFromAPI);
  };

  useEffect(() => {
    setHotel(hotelProp);
    viewUserList();
  }, [hotelProp]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm(formOptions);

  // Actualiza el valor del input si la prop `hotelProp` cambia
  useEffect(() => {
    setValue("nombre", hotelProp.nombre);
  }, [hotelProp, setValue]);

  const crud = async () => {
    // ... lógica para manejo de formulario ...
  };

  return (
    <>
      <main>
        <Link className="boton boton-verde" to="/Hoteles">
          Volver
        </Link>
        <form className="formulario" onSubmit={handleSubmit(crud)}>
          <fieldset className="mt-5">
            <legend>Hoteles</legend>
            <label>Nombre del hotel</label>
            <input
              {...register("nombre")}
              type="text"
              className="form-control"
              value={hotel.nombre}
              onChange={(event) => {
                setHotel((prevHotel) => ({
                  ...prevHotel,
                  nombre: event.target.value,
                }));
              }}
            />
            {errors.nombre && <span>{errors.nombre.message}</span>}
          </fieldset>
          <button type="submit" className="btn btn-success">
            {titleButton}
          </button>
        </form>
      </main>
    </>
  );
};