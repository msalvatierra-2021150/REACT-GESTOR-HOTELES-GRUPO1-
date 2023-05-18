import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { apiCarritoServicios } from "../api/apiServicios";
import { apiCartServicioUpdate } from "../api/apiServicios";
import { apiCartServicioDelete } from "../api/apiServicios";
import { apiCartServicioDeleteAll } from "../api/apiServicios";
import Swal from "sweetalert2";

export const ListCarr = () => {
  const [carTservicio, setCartServicio] = useState([]);
  const [total, setTotal] = useState(0);
  const viewServicioCartList = async () => {
    const getListServiciosCartFromAPI = await apiCarritoServicios();
    console.log(getListServiciosCartFromAPI);
    setCartServicio(getListServiciosCartFromAPI);
    sumar();
  };

  useEffect(() => {
    viewServicioCartList();
    
  }, []);


  const sumar = () => {
    
    const precios = carTservicio.map((carTservicio) => carTservicio.precio);
   
    const total = precios.reduce((acumulador, precio) => acumulador+precio,0);
    
    return total
    
  };

  useEffect(() => {
    sumar()
  }, [carTservicio])
  
  const editar =async (id)=>{
    const editado = await apiCartServicioUpdate(id);
    viewServicioCartList();
  }
  const eliminar =async (id)=>{
    const eliminado = await apiCartServicioDelete(id);
    viewServicioCartList();
  }
  const eliminarAll = async ()=>{
    const result = await apiCartServicioDeleteAll();

    if (result) {
      localStorage.removeItem('existeCar');
      Swal.fire({
          icon: 'success',
          title: 'Servicios Eliminados',
          text: 'Se ha eliminado correctamente',
          showConfirmButton: true,
          confirmButtonText: "Ok"
      }).then((result) => {
          if (result.isConfirmed) {
              window.location.href = "/carrito-servicios";
          }
      })
  } else {
      Swal.fire({
          icon: 'info',
          title: 'Error',
          text: 'No se ha podido eliminar',
          showConfirmButton: true,
          confirmButtonText: "Ok"
      })
  }
    
  }
  let sumare = 0;
  const sumarTotal = (suma)=>{
  
    sumare = suma + sumare;
  }
 
  
  return (
    <>
      <h1> Carrito Servicios</h1>

      <div className="container padding-bottom-3x mb-1">
        
        <div className="table-responsive shopping-cart">
          <table className="table">
            <thead>
              <tr className="table-success">
                <th>Servicio</th>
                <th></th>
                <th></th>
                <th></th>
                <th className="text-center">Item</th>
                <th className="text-center">Nombre</th>
                <th className="text-center">Cantidad</th>
                <th className="text-center">Precio</th>
                <th className="text-center">Sub total</th>
                <th className="text-center">Eliminar Cantidad</th>
                <th className="text-center">Eliminar Servicio</th>
              </tr>
            </thead>
            <tbody>
              {carTservicio.map((s) => {
                return (
                  <tr key={s.itemId}>
                    <td>
                      <div className="product-item">
                        <a className="product-thumb" href="#">
                          <img key={s.itemId}
                            src="https://q-xx.bstatic.com/xdata/images/hotel/max500/438183387.jpg?k=bbc9e875b7055e1ba7a9a68e5b3f0b652ba2c74cdf5ad299aaaffd8e56b059ae&o="
                            alt="Product"
                            height="100"
                          />
                        </a>
                      </div>
                    </td>
                    <td className="text-center text-lg text-medium"></td>
                    <td className="text-center text-lg text-medium"></td>
                    <td className="text-center text-lg text-medium"></td>
                    <td className="text-center text-lg text-medium">
                      {" "}
                      {s.itemId}
                    </td>
                    <td className="text-center text-lg text-medium">
                    {s.nombreServicio}{" "}

                    </td>

                    <td className="text-center text-lg text-medium">
                    {s.quantity}{" "}
                    </td>
                    <td className="text-center text-lg text-medium">
                      {s.precio}{" "}
                    </td>
                    <td className="text-center text-lg text-medium">
                      {s.precio*s.quantity } {sumarTotal(s.precio*s.quantity)}
                    </td>
                    <td className="text-center text-lg text-medium">
                      <button type="button" className="btn btn-danger" onClick={()=>editar(s.itemId)}>
                        Eliminar 
                      </button>
                    </td>
                    <td className="text-center text-lg text-medium">
                      <button type="button" className="btn btn-danger" onClick={()=>eliminar(s.itemId)}>
                        Eliminar 
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="shopping-cart-footer">
          <div className="column text-lg">
            Subtotal: <span className="text-medium">${sumare} </span>
          </div>
          <div className="column">
           
           <Link to="/carrito-servicios" > <button type="button" className="btn btn-dark">volver</button> </Link>
            
            <a
              className="btn btn-primary"
              href="#"
              data-toast=""
              data-toast-type="success"
              data-toast-position="topRight"
              data-toast-icon="icon-circle-check"
              data-toast-title="Your cart"
              data-toast-message="is updated successfully!"
            >
              Update Cart
            </a>
            <Link className="btn btn-success" to='/generar-factura'>Finlizar Compra</Link>
            
             <Link to="/carrito-servicios" >
                <button type="button" className="btn btn-danger" onClick={()=>eliminarAll()} >Clear Carrito 
                </button> 
              </Link>
          </div>
        </div>
        <div className="shopping-cart-footer"></div>
      </div>
    </>
  );
};
