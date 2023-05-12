import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { formOptions, formEventoHelper } from "../helpers/formEventoHelper";
import { useEffect } from "react";
import { apiTipoEvento } from '../api/apiEvento';
import Dropdown from "react-bootstrap/Dropdown";

export const FormEvento = ({ eventoProp, titleButton, option }) => {
    
  
  const [evento, setEvento] = useState(eventoProp);
 
  const [tipoEvento, setTipoEvento] = useState([]);

  const viewTEventoList = async () => {
    const getListTipoEventoFromAPI = await apiTipoEvento();

    setTipoEvento(getListTipoEventoFromAPI);
  };
  const {
    register,
    handleSubmit, 
    formState: { errors },
} = useForm(formOptions);

useEffect(() => {
    viewTEventoList();
}, [])

useEffect(() => {
    setEvento({ ...evento });
}, []);

const crud = async () => {
 
    await formEventoHelper(evento, option);

}
const idEvento = (t) => {
  
   setEvento(() => ({ ...evento, tipoEvento: t._id }));
}
    
  return (
    <main >
            <Link className="boton boton-verde" to="/list-evento">Volver</Link>
                <form className="formulario" onSubmit={handleSubmit(crud)}>
                    <fieldset className="mt-5">
                        <legend>Informacion General</legend>
                        <label >Nombre del Evento</label>
                        <input
                            {...register("nombreEvento")}
                            type="text"
                            className="form-control"
                            value={evento.nombreEvento}
                            onChange={({ target: { value } }) => {
                                setEvento(() => ({ ...evento,nombreEvento: value }));
                            }
                            }
                        />
                        {errors.nombreEvento && (<span>{errors.nombreEvento.message}</span>)}
                        <label >Cantidad de usuarios</label>
                        <input
                            {...register("cantidadUsuarios")}
                            type="number"
                            className="form-control"
                            value={evento.cantidadUsuarios}
                            onChange={({ target: { value } }) => {
                                setEvento(() => ({ ...evento,cantidadUsuarios: value }));
                            }
                            }
                        />
                        {errors.cantidadUsuarios && (<span>{errors.cantidadUsuarios.message}</span>)}
                        
                        <label >Fecha inicio</label>
                        <input
                            {...register("fechaHoraStart")}
                            type="date"
                            className="form-control"
                            value={(evento.fechaHoraStart)===undefined? [(evento.fechaHoraInicio).substr(0, 10)]:[evento.fechaHoraStart]}
                            onChange={({ target: { value } }) => {
                                
                                setEvento(() => ({ ...evento,fechaHoraStart: value }));
                            }
                            }
                        />
                        {errors.fechaHoraStart && (<span>{errors.fechaHoraStart.message}</span>)}
                        <label >Hora de inicio</label>
                        <input
                            {...register("horaInicio")}
                            type="time"
                            className="form-control"
                            value={(evento.horaInicio)=== undefined ? [(evento.fechaHoraInicio).substr(11, 5)]:[evento.horaInicio]}
                            onChange={({ target: { value } }) => {
                                
                                setEvento(() => ({ ...evento,horaInicio: value }));
                            }
                            }
                        />
                        
                        <label >Fecha final</label>
                        <input
                            {...register("fechaHoraEnd")}
                            type="date"
                            className="form-control"
                            value={(evento.fechaHoraEnd)===undefined ? [(evento.fechaHoraFin).substr(0, 10)]:[evento.fechaHoraEnd]}
                            onChange={({ target: { value } }) => {
                                setEvento(() => ({ ...evento,fechaHoraEnd: value }));
                            }
                            }
                        />
                        {errors.fechaHoraEnd && (<span>{errors.fechaHoraEnd.message}</span>)}
                        <label >Horario termia</label>
                        <input
                            {...register("horaFinal")}
                            type="time"
                            className="form-control"
                            value={(evento.horaFinal)===undefined ? [(evento.fechaHoraFin).substr(11, 5)]:[evento.horaFinal]}
                            onChange={({ target: { value } }) => {
                                setEvento(() => ({ ...evento,horaFinal: value }));
                            }
                            }
                        />
                        {errors.horaFinal && (<span>{errors.horaFinal.message}</span>)}
                        <label >Tipo de Evento</label>

                        {
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              Eventos
                            </Dropdown.Toggle>
      
                            
                              <Dropdown.Menu >
                              {
                                tipoEvento.map((t) => {
                                    return (
                                        <Dropdown.Item href="#/action-1"
                                        key={t._id}
                                        {...register("tipoEvento")}
                                        value={evento.nombre}
                                        onClick={()=> idEvento(t)}
                                        >
                                           
                                          {t.nombre}
                                        </Dropdown.Item>
                                        )
                                })
                              }
                              </Dropdown.Menu>
                            
                          </Dropdown>
                        }
                       
                    </fieldset>
                    <button type="submit" className="btn btn-success" >{titleButton}</button>
                </form>
            </main>
  )
} 
  