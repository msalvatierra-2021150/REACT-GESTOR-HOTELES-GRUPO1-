import { Habitacion } from "../models/habitacion.models"
import { FormHabitacion } from "./FormHabitacion"


export const CreateHabitacion = () => {
    return (
        <>
            <div className="container">
                <h1>Crear una Habitacion</h1>
                <FormHabitacion habitacionProp={Habitacion}
                    titleButton={'Crear Habitaciòn'}
                    option={1} />
            </div>
        </>
    )
}
