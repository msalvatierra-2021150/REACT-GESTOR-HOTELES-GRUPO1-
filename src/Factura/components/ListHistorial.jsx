import React from 'react'
import { useEffect, useState } from "react";
import { apiHistorialServicio } from '../api/apiFactura';
import Table from 'react-bootstrap/Table';

export const ListHistorial = () => {
    const [hoteles, setHoteles] = useState([]);

    const viewHotelesList = async () => {
        const getListHotelFromAPI = await apiHistorialServicio();
        
        setHoteles(getListHotelFromAPI);
      };
    useEffect(() => {
      viewHotelesList();
    }, [])
    
    console.log(hoteles);
  return (
    <>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Direccion</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        {
            hoteles.map((h)=>{
                return(
                    <tr key={h._id}>
                        <th className="text-center">{h.nombre} </th>
                        <th className="text-center">{h.direccion} </th>
                        <th className="text-center"><img src={h.img} width="100" height="100" ></img> </th>
                    </tr>

                )

            })
        }
      </tbody>
    </Table>
    </>
  )
}
