import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { apiHabitacionesById } from "../../habitaciones/api/apiHabitaciones";
import { FormReserva } from "./FormReserva";
import { Reserva } from "../models/reserva.models";
import { ListHabitacion } from "../../habitaciones/components/ListHabitacion";

export const CreateReserva = () => {
    let { search } = useLocation();
    let query = new URLSearchParams(search);

    let idhabitacion = query.get('habitacion');

    return (
        <>
            <div className="container text-left">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <ListHabitacion idhabitacion={idhabitacion} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <FormReserva reservaProp={Reserva}
                            titleButton={'Confirmar Reserva'}
                            option={1} />
                    </div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col">
                        <Link className="boton boton-verde" to={"/habitaciones"}>Cancelar</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
