import { Hotel } from "../models/hotel.models"
import { FormHotel } from "./FormHotel"


export const CreateHotel = () => {
    return (
        <>
            <div className="container">
                <h1>Crear un Rol</h1>
                <FormHotel hotelProp={Hotel}
                    titleButton={'Crear Rol'}
                    option={1} />
            </div>
        </>
    )
}
