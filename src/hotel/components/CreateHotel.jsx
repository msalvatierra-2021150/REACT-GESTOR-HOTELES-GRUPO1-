import { Hotel } from "../models/hotel.models"
import { FormHotel } from "./FormHotel"
import { Link } from "react-router-dom";

export const CreateHotel = () => {
    return (
        <>
            <div className="container">
                <h1>Crear un Hotel</h1>
                <Link to="/hoteles" className="boton boton-verde">
                    Regresar
                </Link>
                <FormHotel hotelProp={Hotel}
                    titleButton={'Crear Hotel'}
                    option={1} />
            </div>
        </>
    )
}
