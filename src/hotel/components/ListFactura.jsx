import { useEffect, useState } from "react";
import { Factura } from "../models/factura.models";
import { apiFactura } from "../api/apiFactura";

export const ListFactura = () => {

  const [factura, setFactura] = useState(Factura);

  const [showModal, setShowModal] = useState(false);
  const [ids, setId] = useState(0)

  //Estado de usuarios en la lista de forma independiente
  const [listFact, setListFact] = useState([]);

  const viewFactList = async () => {
    const getListFactFromAPI = await apiFactura();

    setListFact(getListFactFromAPI);
  };

  //UseEffect crea efectos secundarios, en este caso al momento de renderizar la tabla
  useEffect(() => {
    viewFactList();
  }, [showModal]);

  //modal
  const handleOpenModal = (f) => {
    console.log(f)
    setShowModal(true);
    setFactura(f);

  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


return (
  <>
    <main className="container seccion">
      <h1>Administrador de Hoteles</h1>
      <table className="propiedades">
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">NITEmisor</th>
            <th className="text-center">Fecha</th>
            <th className="text-center">Usuario</th>
            <th className="text-center">NITReceptor</th>
            <th className="text-center">Cart Reservaciones</th>
            <th className="text-center">Cart Servicios </th>
            <th className="text-center">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listFact.map((f) => {

            return (

              <tr key={h._id}>
                <th className="text-center">{f._id} </th>
                <td className="text-center">{f.NITEmisor}</td>
                <td className="text-center">{f.fecha}</td>
                <td className="text-center">{f.usuario}</td>
                <td className="text-center">{f.NITReceptor}</td>
                <td className="text-center">{f.cart_reservaciones}</td>
                <td className="text-center">{f.cart_servicios}</td>
                <td className="text-center">{f.total}</td>

              </tr>

            );

          }

          )

          }
        </tbody>
      </table>
    </main>
  </>
  );

};
