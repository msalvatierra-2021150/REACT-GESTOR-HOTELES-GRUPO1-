import { useState } from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { formOptions, formUserHelper } from "../helpers/formUserHelper";
import { useEffect } from "react";
//HotelProp es mi modelo
export const FormUsuario = ({ userProp, titleButton, option }) => {
    const [usuario, setUsuario] = useState(userProp);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formOptions)


    useEffect(() => {
        setUsuario({ ...usuario });
    }, [])

    const crud = async () => {
        await formUserHelper(usuario, option);

    }

    return (
        <>
            <main >
                <form className="formulario" onSubmit={handleSubmit(crud)}>
                    <fieldset className="mt-5">
                        <legend>Informacion General</legend>
                        <label >Nombre</label>
                        <input
                            {...register("nombre")}
                            type="text"
                            className="form-control"
                            value={usuario.nombre}
                            onChange={({ target: { value } }) => {
                                setUsuario(() => ({ ...usuario,nombre: value }));
                            }
                            }
                        />
                        {errors.nombre && (<span>{errors.nombre.message}</span>)}
                        <label htmlFor="correo">Correo</label>
                        <input
                            {...register("correo")}
                            type="email"
                            
                            className="form-control"
                            value={usuario.correo}
                            onChange={({ target: { value } }) => {
                                setUsuario(() => ({ ...usuario, correo: value }));
                            }
                            }
                        />
                        {errors.correo && (<span>{errors.correo.message}</span>)}

                        <label htmlFor="password">Password</label>
                        <input

                            {...register("password")}
                            type="password"
                            className="form-control"
                            value={usuario.password}
                            onChange={({ target: { value } }) => {
                                setUsuario(() => ({ ...usuario, password: value }));
                            }}
                        />
                        {errors.password && (<span>{errors.password.message}</span>)}

                    </fieldset>
                    <button type="submit" className="btn btn-success" onClick={crud}>{titleButton}</button>
                </form>
            </main>
        </>
    )
}