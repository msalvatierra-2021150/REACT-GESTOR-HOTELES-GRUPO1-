import { Rol } from "../models/rol.models"
import { FormRol } from "./FormRol"


export const CreateRol = () => {
    return (
        <>
            <div className="container">
                <h1>Crear un Rol</h1>
                <FormRol rolProp={Rol}
                    titleButton={'Crear Rol'}
                    option={1} />
            </div>
        </>
    )
}
