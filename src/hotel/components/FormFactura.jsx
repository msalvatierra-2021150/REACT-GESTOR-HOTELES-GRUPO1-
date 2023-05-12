import { useState } from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { formOptions, formUserHelper } from "../helpers/formUserHelper";
import { useEffect } from "react";
//HotelProp es mi modelo
export const FormFactura = ({ facturaProp, titleButton, option }) => {
    const [factura, setFactura] = useState(facturaProp);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formOptions)


    useEffect(() => {
        setFactura({ ...factura });
    }, [])

    const crud = async () => {

        await formUserHelper(factura, option);

    }

    console.log(factura);
    return (
        <>
            <main >
            <Link className="boton boton-verde" to="/home">Volver</Link>
                <form className="formulario" onSubmit={handleSubmit(crud)}>
                    <fieldset className="mt-5">
                        <legend>Informacion General</legend>
                        <label >Ingresa tu número de NIT</label>
                        <input
                            {...register("NITReceptor")}
                            type="text"
                            className="form-control"
                            value={factura.NITReceptor}
                            onChange={({ target: { value } }) => {
                                setFactura(() => ({ ...factura,NITReceptor: value }));
                            }
                            }
                        />
                        {errors.NITReceptor && (<span>{errors.NITReceptor.message}</span>)}
                    </fieldset>
                    <button type="submit" className="btn btn-success" onClick={crud}>{titleButton}</button>
                </form>
            </main>
        </>
    )
}