import React from 'react'
import encuentra from '../../../img/encuentra.jpg';
import { Link } from 'react-router-dom';

export const ListHotelSearch = ({ arrayHotel = [] }) => {
    return (
        <>
            {
                arrayHotel.map((hotel) => {
                    return (
                        <div className="card mb-3" key={hotel._id}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={encuentra} className="img-fluid rounded-start" alt={hotel.img} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title">{hotel.nombre}</h4>
                                        <p className="card-text">Departamento: {hotel.departamento}</p>
                                        <p className="card-text">Direccion: {hotel.direccion}</p>
                                        <p className="card-text">Descripcion: {hotel.descripcion}</p>
                                        <p className="card-text">Rating: {hotel.rating}</p>
                                        <Link className="btn btn-primary" to={`/habitaciones-hotel?idhotel=${hotel._id}`}>Ver habitaciones de este hotel</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
