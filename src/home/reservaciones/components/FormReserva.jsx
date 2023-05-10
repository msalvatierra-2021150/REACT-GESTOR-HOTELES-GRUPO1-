import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { formOptions, formReservaHelper } from "../helpers/formReservaHelper";

export const FormReserva = ({ reservaProp, titleButton, option }) => {
    const [reserva, setReserva] = useState(reservaProp);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formOptions)

    useEffect(() => { setReserva({ ...reserva }); }, []);

    const crud = async () => await formReservaHelper(reserva, option)

    return (
        <>
            <main>
                <form className="formulario" onSubmit={handleSubmit(crud)}>
                    <div className="mb-3">
                        <label className="form-label">Fecha inicio de tu reserva: </label>
                        <input
                            {...register('fechaStart')}
                            type="date"
                            className="form-control"
                            value={reserva.fechaStart}
                            onChange={({ target: { value } }) => {
                                setReserva(() => ({ ...reserva, fechaStart: value }))
                            }}
                            required
                        />
                        {errors.fechaStart && (<span>{errors.fechaStart.message}</span>)}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Hora inicio de tu reserva: </label>
                        <input
                            {...register('horaStart')}
                            type="time"
                            className="form-control"
                            value={reserva.horaStart}
                            onChange={({ target: { value } }) => {
                                setReserva(() => ({ ...reserva, horaStart: value }))
                            }}
                            required
                        />
                        {errors.horaStart && (<span>{errors.horaStart.message}</span>)}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Fecha fin de tu reserva: </label>
                        <input
                            {...register('fechaEnd')}
                            type="date"
                            className="form-control"
                            value={reserva.fechaEnd}
                            onChange={({ target: { value } }) => {
                                setReserva(() => ({ ...reserva, fechaEnd: value }))
                            }}
                            required
                        />
                        {errors.fechaEnd && (<span>{errors.fechaEnd.message}</span>)}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Hora de fin de tu reserva: </label>
                        <input
                            {...register('horaEnd')}
                            type="time"
                            className="form-control"
                            value={reserva.horaEnd}
                            onChange={({ target: { value } }) => {
                                setReserva(() => ({ ...reserva, horaEnd: value }))
                            }}
                            required
                        />
                        {errors.horaEnd && (<span>{errors.horaEnd.message}</span>)}
                    </div>
                    <button type="submit" className="btn btn-success" onClick={crud}>{titleButton}</button>
                </form>
            </main>
        </>
    )
}
