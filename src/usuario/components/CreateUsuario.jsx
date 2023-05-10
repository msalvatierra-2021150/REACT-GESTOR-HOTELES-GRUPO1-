import { NavbarInicial } from "../../login/components/NavbarInicial"
import { Usuario } from "../models/usuario.models"
import { FormUsuario } from "./FormUsuario"


export const CreateUsuario = () => {
    return (
        <>
            <NavbarInicial/>
            <div className="container">
                <h1>Registrate</h1>
                <FormUsuario userProp={Usuario}
                    titleButton={'Crear Cuenta'}
                    option={1} />
            </div>
        </>
    )
}
