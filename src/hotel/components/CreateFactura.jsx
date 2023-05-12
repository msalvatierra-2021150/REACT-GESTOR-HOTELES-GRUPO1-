import { Factura } from "../models/factura.models"
import { FormFactura } from "./FormFactura"


export const CreateFactura = () => {
    return (
        <>
            <div className="container">
                <h1>Crear un Hotel</h1>
                <FormFactura facturaProp={Factura}
                    titleButton={'Generar Factura'}
                    option={1} />
            </div>
        </>
    )
}
