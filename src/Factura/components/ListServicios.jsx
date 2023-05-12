import React from 'react'
import { apiHistorialS } from "../api/apiFactura";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';


export const ListServicios = () => {

    const [factura, setFactura] = useState([]);
    const viewServicioList = async () => {
        const getListServicioFromAPI = await apiHistorialS();
      
        setFactura(getListServicioFromAPI);
      };
      useEffect(() => {
        viewServicioList();
      }, []);

      console.log(factura);
  return (
    <> <Table striped bordered hover>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Descripcion </th>
        <th>Precio</th>
       
      </tr>
    </thead>
    <tbody>
      {factura.map((f)=>{
        return(
            <tr key={f._id}>
                <th className="text-center">{f.nombreServicio} </th>
                <th className="text-center">{f.descripcion} </th>
                <th className="text-center">{f.precio} </th>
            </tr>
        )
      })

      }
    </tbody>
  </Table></>
  )
}
