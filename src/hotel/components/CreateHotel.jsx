import { Hotel } from "../models/hotel.models"
import { FormHotel } from "./FormHotel"


export const CreateHotel = () => {
    /*
    ¿Qué es un documento en MongoDB?//Una fila en una colección
¿Para qué se utiliza CSS?//Para definir el estilo de una página web

    */
    return (
        <>
            <div className="container">
                <h1>Crear un Hotel</h1>
                <FormHotel hotelProp={Hotel}
                    titleButton={'Crear Hotel'}
                    option={1} />
            </div>
        </>
    ) 
}
