import { useState } from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { formOptions, formUserHelper } from "../helpers/formUserHelper";
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect } from "react";
import { apiHotel,apiUsuario } from "../api/apiHabitacion";
//HotelProp es mi modelo
export const FormHabitacion = ({ habitacionProp, titleButton, option }) => {
    const [usuario, setUsuario] = useState([]);
    const [habitacion, setHabitacion] = useState(habitacionProp);
    const [hotel, setHotel] = useState([]);

    const viewUserlList = async () => {
        const getListUsersFromAPI = await apiUsuario();
        
        setUsuario(getListUsersFromAPI);
        
        
      };
      const viewHotList = async ()=>{
        const getListHoteles = await apiHotel();

        setHotel(getListHoteles);
        
    }
      useEffect(() => {
        viewUserlList();
        viewHotList()
      }, []);

    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formOptions)


    useEffect(() => {
        setHabitacion({ ...habitacion });
    }, [])

    const crud = async () => {

        await formUserHelper(habitacion, option);

    }
    const idUser = (user) => {
  
        setHabitacion(() => ({ ...habitacion, usuario: user._id }));
    }

    const idHotel = (hot) => {
  
        setHabitacion(() => ({ ...habitacion, hotel: hot._id }));
    }
    console.log(habitacion);
    return (
        <>
            <main >
            <Link className="boton boton-verde" to="/habitaciones">Volver</Link>
                <form className="formulario" onSubmit={handleSubmit(crud)}>
                    <fieldset className="mt-5">
                        <legend>Informacion General</legend>
                        <label >Precio de la habitacion</label>
                        <input
                            {...register("precio")}
                            type="text"
                            className="form-control"
                            value={habitacion.precio}
                            onChange={({ target: { value } }) => {
                                setHabitacion(() => ({ ...habitacion,precio: value }));
                            }
                            }
                        />
                        {errors.precio && (<span>{errors.precio.message}</span>)}
                        <label htmlFor="descripcion">Descripcion de la habitacion</label>
                        <input
                            {...register("descripcion")}
                            type="text"
                            className="form-control"
                            value={habitacion.descripcion}
                            onChange={({ target: { value } }) => {
                                setHabitacion(() => ({ ...habitacion, descripcion: value }));
                            }
                            }
                        />
                        {errors.descripcion && (<span>{errors.descripcion.message}</span>)}
                        <label htmlFor="img">IMG</label>
                        <input
                            {...register("img")}
                            type="text"
                            className="form-control"
                            value={habitacion.img}
                            onChange={({ target: { value } }) => {
                                setHabitacion(() => ({ ...habitacion, img: value }));
                            }}
                        />
                        {errors.img && (<span>{errors.img.message}</span>)}
                        <label htmlFor="capacidad">Capacidad de la habitaciòn</label>
                        <input

                            {...register("capacidad")}
                            type="text"
                            className="form-control"
                            value={habitacion.capacidad}
                            onChange={({ target: { value } }) => {
                                setHabitacion(() => ({ ...habitacion, capacidad: value }));
                            }}

                        />
                        {errors.capacidad && (<span>{errors.capacidad.message}</span>)}

                        <label htmlFor="hotel">Hotel</label>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" className="w-100" id="dropdown-basic">
                               Hoteles
                            </Dropdown.Toggle>

                            <Dropdown.Menu  className="w-100">
                                {
                                    hotel.map((h)=>{
                                        return(
                                            <Dropdown.Item 
                                            {...register("hotel")}
                                            value={habitacion.hotel}
                                            key={h._id} 
                                            onClick={()=> idHotel(h)}
                                            >
                                                {h.nombre} 
                                            </Dropdown.Item>
                                        )
                                    })
                                }

                            </Dropdown.Menu>
                        </Dropdown>

                        <label htmlFor="usuario">Usuario</label>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" className="w-100" id="dropdown-basic">
                               Usuarios
                            </Dropdown.Toggle>

                            <Dropdown.Menu  className="w-100">
                                {
                                    usuario.map((u)=>{
                                        return(
                                            <Dropdown.Item 
                                            {...register("usuario")}
                                            value={habitacion.usuario}
                                            key={u._id} 
                                            onClick={()=> idUser(u)}
                                            >
                                                {u.nombre} 
                                            </Dropdown.Item>
                                        )
                                    })
                                }

                            </Dropdown.Menu>
                        </Dropdown>

                        <label htmlFor="disponible">Disponible</label>
                        <input
                            {...register("disponible")}
                            type="text"
                            className="form-control"
                            value={habitacion.disponible}
                            onChange={({ target: { value } }) => {
                                setHabitacion(() => ({ ...habitacion, disponible: value }));
                            }}

                        />
                        {errors.disponible && (<span>{errors.disponible.message}</span>)}
                    </fieldset>
                    <button type="submit" className="btn btn-success" onClick={crud}>{titleButton}</button>
                </form>
            </main>
        </>
    )
}